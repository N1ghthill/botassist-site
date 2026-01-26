const OWNER = 'N1ghthill'
const REPO = 'botassist-whatsapp'

const PLATFORM_MANIFEST = {
  windows: 'latest.yml',
  mac: 'latest-mac.yml',
  linux: 'latest-linux.yml'
}

function parseYamlScalar(yamlText, key) {
  const match = yamlText.match(new RegExp(`^${key}:\\s*(.+)\\s*$`, 'm'))
  if (!match) return null
  return match[1].trim().replace(/^['"]|['"]$/g, '')
}

function encodePath(path) {
  return path
    .split('/')
    .map((segment) => encodeURIComponent(segment))
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
    const response = await fetch(manifestUrl, { redirect: 'follow' })
    if (!response.ok) {
      res.status(200).json({ platform, url: fallbackUrl, version: null, path: null })
      return
    }

    const text = await response.text()
    const path = parseYamlScalar(text, 'path')
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

