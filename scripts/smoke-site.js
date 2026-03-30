#!/usr/bin/env node

const { spawn } = require('child_process')
const path = require('path')
const net = require('net')

const HOST = '127.0.0.1'
const SERVER_TIMEOUT_MS = 30000
const REQUIRED_HOME_STRINGS = ['Baixar e testar agora', 'operar WhatsApp com IA']
const RELEASE_URL_PREFIX = 'https://github.com/N1ghthill/botassist-whatsapp/releases/'

function createLogBuffer(limit = 200) {
  const entries = []
  return {
    append(prefix, chunk) {
      const lines = String(chunk || '')
        .split(/\r?\n/)
        .map((line) => line.trimEnd())
        .filter(Boolean)
      for (const line of lines) {
        entries.push(`${prefix}${line}`)
      }
      if (entries.length > limit) {
        entries.splice(0, entries.length - limit)
      }
    },
    dump() {
      return entries.join('\n')
    },
  }
}

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = net.createServer()
    server.listen(0, HOST, () => {
      const address = server.address()
      server.close((error) => {
        if (error) {
          reject(error)
          return
        }
        resolve(address.port)
      })
    })
    server.on('error', reject)
  })
}

async function waitForServer(baseUrl, timeoutMs) {
  const deadline = Date.now() + timeoutMs
  let lastError = null

  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`, {
        headers: {
          Accept: 'text/html',
          'User-Agent': 'botassist-site-smoke',
        },
      })
      if (response.ok) {
        return
      }
      lastError = new Error(`Servidor respondeu ${response.status} durante o warmup.`)
    } catch (error) {
      lastError = error
    }
    await new Promise((resolve) => setTimeout(resolve, 500))
  }

  throw lastError || new Error(`Servidor nao respondeu em ${timeoutMs}ms.`)
}

async function stopServer(child) {
  if (!child || child.exitCode !== null) return

  await new Promise((resolve) => {
    const timer = setTimeout(() => {
      child.kill('SIGKILL')
    }, 5000)

    child.once('exit', () => {
      clearTimeout(timer)
      resolve()
    })

    child.kill('SIGTERM')
  })
}

async function assertHomepage(baseUrl) {
  const response = await fetch(`${baseUrl}/`, {
    headers: {
      Accept: 'text/html',
      'User-Agent': 'botassist-site-smoke',
    },
  })

  if (!response.ok) {
    throw new Error(`Homepage retornou ${response.status}.`)
  }

  const html = await response.text()
  for (const snippet of REQUIRED_HOME_STRINGS) {
    if (!html.includes(snippet)) {
      throw new Error(`Homepage nao contem o trecho esperado: "${snippet}".`)
    }
  }
}

async function assertLatestDownloadEndpoint(baseUrl) {
  const response = await fetch(`${baseUrl}/api/latest-download?platform=windows`, {
    headers: {
      Accept: 'application/json',
      'User-Agent': 'botassist-site-smoke',
    },
  })

  if (!response.ok) {
    throw new Error(`/api/latest-download retornou ${response.status}.`)
  }

  const payload = await response.json()
  if (payload?.platform !== 'windows') {
    throw new Error(`Endpoint retornou platform invalido: ${payload?.platform || '-'}.`)
  }
  if (typeof payload?.url !== 'string' || !payload.url.startsWith(RELEASE_URL_PREFIX)) {
    throw new Error(`Endpoint retornou url invalida: ${String(payload?.url || '-')}.`)
  }
  if (payload.path !== null && typeof payload.path !== 'string') {
    throw new Error(`Endpoint retornou path invalido: ${JSON.stringify(payload?.path)}.`)
  }
}

async function main() {
  const repoRoot = path.resolve(__dirname, '..')
  const nextBin = require.resolve('next/dist/bin/next')
  const port = await getFreePort()
  const baseUrl = `http://${HOST}:${port}`
  const logs = createLogBuffer()

  const child = spawn(process.execPath, [nextBin, 'start', '-H', HOST, '-p', String(port)], {
    cwd: repoRoot,
    env: {
      ...process.env,
      NODE_ENV: 'production',
    },
    stdio: ['ignore', 'pipe', 'pipe'],
  })

  child.stdout.on('data', (chunk) => logs.append('[stdout] ', chunk))
  child.stderr.on('data', (chunk) => logs.append('[stderr] ', chunk))

  try {
    await waitForServer(baseUrl, SERVER_TIMEOUT_MS)
    await assertHomepage(baseUrl)
    await assertLatestDownloadEndpoint(baseUrl)
    console.log('Site smoke OK')
    console.log(`Validated ${baseUrl}/ and /api/latest-download?platform=windows`)
  } catch (error) {
    console.error(error?.stack || error?.message || String(error))
    const logDump = logs.dump()
    if (logDump) {
      console.error('--- next start logs ---')
      console.error(logDump)
    }
    process.exitCode = 1
  } finally {
    await stopServer(child)
  }
}

main().catch((error) => {
  console.error(error?.stack || error?.message || String(error))
  process.exit(1)
})
