const OWNER = 'N1ghthill'
const REPO = 'botassist-whatsapp'

const PLATFORM_MANIFEST = {
  windows: 'latest.yml',
  mac: 'latest-mac.yml',
  linux: 'latest-linux.yml'
}

function stripYamlQuotes(value) {
  return value.trim().replace(/^['"]|['"]$/g, '')
}

function parseYamlScalar(yamlText, key) {
  const match = yamlText.match(new RegExp(`^${key}:\\s*(.+)\\s*$`, 'm'))
  if (!match) return null
  return stripYamlQuotes(match[1])
}

function parseYamlFirstFileUrl(yamlText) {
  const lines = yamlText.split(/\r?\n/)
  const filesLineIndex = lines.findIndex((line) => /^\s*files:\s*$/.test(line))
  if (filesLineIndex === -1) return null

  const filesIndent = (lines[filesLineIndex].match(/^\s*/) || [''])[0].length

  let inFirstEntry = false
  for (let index = filesLineIndex + 1; index < lines.length; index++) {
    const line = lines[index]
    if (!line.trim()) continue

    const indent = (line.match(/^\s*/) || [''])[0].length
    if (indent <= filesIndent) break

    const trimmed = line.trim()
    if (trimmed.startsWith('-')) {
      if (inFirstEntry) break
      inFirstEntry = true

      const inlineUrlMatch = trimmed.match(/^-+\s*url:\s*(.+)\s*$/)
      if (inlineUrlMatch) return stripYamlQuotes(inlineUrlMatch[1])
      continue
    }

    if (!inFirstEntry) continue

    const urlMatch = trimmed.match(/^url:\s*(.+)\s*$/)
    if (urlMatch) return stripYamlQuotes(urlMatch[1])
  }

  return null
}

function encodePath(path) {
  return path
    .split('/')
    .map((segment) => {
      try {
        return encodeURIComponent(decodeURIComponent(segment))
      } catch {
        return encodeURIComponent(segment)
      }
    })
    .join('/')
}

export default async function handler(req, res) {
  const platformRaw = Array.isArray(req.query.platform)
    ? req.query.platform[0]
    : req.query.platform

  const platform = String(platformRaw || '').toLowerCase()
  const manifest = PLATFORM_MANIFEST[platform]

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')

  if (!manifest) {
    res.status(400).json({ error: 'Invalid platform. Use windows, mac, or linux.' })
    return
  }

  const manifestUrl = `https://github.com/${OWNER}/${REPO}/releases/latest/download/${manifest}`
  const fallbackUrl = `https://github.com/${OWNER}/${REPO}/releases/latest`

  try {
    const response = await fetch(manifestUrl, {
      redirect: 'follow',
      headers: {
        Accept: 'application/octet-stream',
        'User-Agent': 'botassist-site'
      }
    })
    if (!response.ok) {
      res.status(200).json({ platform, url: fallbackUrl, version: null, path: null })
      return
    }

    const text = await response.text()
    const contentType = response.headers.get('content-type') || ''
    if (contentType.includes('text/html')) {
      res.status(200).json({ platform, url: fallbackUrl, version: null, path: null })
      return
    }

    const path =
      parseYamlScalar(text, 'path') ||
      parseYamlScalar(text, 'file') ||
      parseYamlFirstFileUrl(text)
    const version = parseYamlScalar(text, 'version')

    if (!path) {
      res.status(200).json({ platform, url: fallbackUrl, version: version || null, path: null })
      return
    }

    const url = `https://github.com/${OWNER}/${REPO}/releases/latest/download/${encodePath(path)}`
    res.status(200).json({ platform, url, version: version || null, path })
  } catch {
    res.status(200).json({ platform, url: fallbackUrl, version: null, path: null })
  }
}
