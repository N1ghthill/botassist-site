#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const OWNER = 'N1ghthill'
const REPO = 'botassist-whatsapp'
const MANIFEST_URL = `https://github.com/${OWNER}/${REPO}/releases/latest/download/release-manifest.json`

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

async function fetchLatestManifestVersion() {
  const response = await fetch(MANIFEST_URL, {
    headers: {
      Accept: 'application/octet-stream',
      'User-Agent': 'botassist-site-release-check'
    },
    redirect: 'follow'
  })

  if (!response.ok) {
    return null
  }

  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('text/html')) {
    return null
  }

  const data = await response.json()
  return String(data?.version || '').trim() || null
}

async function main() {
  const editorialVersion = readEditorialVersion()
  const manifestVersion = await fetchLatestManifestVersion()
  const latestReleaseVersion = await fetchLatestReleaseVersion()

  if (!latestReleaseVersion) {
    throw new Error('GitHub nao retornou uma tag valida para a latest release')
  }

  if (manifestVersion) {
    if (manifestVersion !== latestReleaseVersion) {
      throw new Error(
        `release-manifest.json (${manifestVersion}) diverge da latest release do app (${latestReleaseVersion})`
      )
    }

    console.log(`ok - release-manifest.json alinhado com a latest release (${manifestVersion})`)
    return
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
