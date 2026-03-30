import { fetchLatestReleaseMeta } from '../../lib/appRelease'

export default async function handler(req, res) {
  const platformRaw = Array.isArray(req.query.platform)
    ? req.query.platform[0]
    : req.query.platform

  const platform = String(platformRaw || '').toLowerCase()

  res.setHeader('Content-Type', 'application/json; charset=utf-8')
  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=86400')

  if (!['windows', 'mac', 'linux'].includes(platform)) {
    res.status(400).json({ error: 'Invalid platform. Use windows, mac, or linux.' })
    return
  }

  try {
    const releaseMeta = await fetchLatestReleaseMeta()
    const download = releaseMeta?.downloads?.[platform] || null

    res.status(200).json({
      platform,
      url: download?.url || releaseMeta.releasePageUrl,
      version: releaseMeta.version || null,
      path: download?.path || null,
    })
  } catch {
    res.status(200).json({
      platform,
      url: 'https://github.com/N1ghthill/botassist-whatsapp/releases/latest',
      version: null,
      path: null,
    })
  }
}
