#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const OWNER = 'N1ghthill'
const REPO = 'botassist-whatsapp'

function readEditorialVersion() {
  const filePath = path.join(__dirname, '..', 'src', 'lib', 'releaseMeta.js')
  const source = fs.readFileSync(filePath, 'utf8')
  const match = source.match(/version:\s*'([^']+)'/)
  if (!match) {
    throw new Error('Nao foi possivel encontrar releaseMeta.version em src/lib/releaseMeta.js')
  }
  return String(match[1]).trim()
}

async function fetchLatestReleaseVersion() {
  const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`, {
    headers: {
      Accept: 'application/vnd.github+json',
      'User-Agent': 'botassist-site-release-check'
    }
  })

  if (!response.ok) {
    throw new Error(`Falha ao consultar release mais recente (${response.status})`)
  }

  const data = await response.json()
  return String(data.tag_name || '').trim().replace(/^v/, '')
}

async function main() {
  const editorialVersion = readEditorialVersion()
  const latestReleaseVersion = await fetchLatestReleaseVersion()

  if (!latestReleaseVersion) {
    throw new Error('GitHub nao retornou uma tag valida para a latest release')
  }

  if (editorialVersion !== latestReleaseVersion) {
    throw new Error(
      `releaseMeta.version (${editorialVersion}) diverge da latest release do app (${latestReleaseVersion})`
    )
  }

  console.log(`ok - releaseMeta.version alinhada com a latest release (${editorialVersion})`)
}

main().catch((error) => {
  console.error(error && error.message ? error.message : error)
  process.exitCode = 1
})
