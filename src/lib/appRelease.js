import { releaseMeta as fallbackReleaseMeta } from './releaseMeta'

const OWNER = 'N1ghthill'
const REPO = 'botassist-whatsapp'
const RELEASE_MANIFEST_FILE = 'release-manifest.json'

export const RELEASE_META_REVALIDATE_SECONDS = 3600
export const RELEASE_PAGE_URL = `https://github.com/${OWNER}/${REPO}/releases/latest`

function stripTagPrefix(value) {
  return String(value || '').trim().replace(/^v/i, '')
}

function buildBadge(tagName, isPrerelease) {
  if (!isPrerelease) return 'Release estavel'
  const normalizedTag = String(tagName || '').toLowerCase()
  if (normalizedTag.includes('-rc.')) return 'Release candidate'
  if (normalizedTag.includes('-beta.')) return 'Beta publica'
  return 'Prerelease'
}

function normalizeAsset(asset) {
  return {
    name: String(asset?.name || '').trim(),
    url: String(asset?.browser_download_url || asset?.url || '').trim(),
  }
}

function isMetadataAsset(name) {
  return (
    String(name || '').endsWith('.blockmap') ||
    String(name || '').endsWith('.yml') ||
    String(name || '') === RELEASE_MANIFEST_FILE
  )
}

function pickFirstAsset(assets, predicate) {
  return assets.find((asset) => predicate(String(asset?.name || '').trim())) || null
}

function pickPrimaryDownloads(assets) {
  const fileAssets = (Array.isArray(assets) ? assets : [])
    .map(normalizeAsset)
    .filter((asset) => asset.name && asset.url && !isMetadataAsset(asset.name))

  const windowsPrimary =
    pickFirstAsset(fileAssets, (name) => /Setup-.*\.exe$/i.test(name)) ||
    pickFirstAsset(fileAssets, (name) => /\.exe$/i.test(name))
  const macPrimary = pickFirstAsset(fileAssets, (name) => /\.dmg$/i.test(name))
  const linuxPrimary =
    pickFirstAsset(fileAssets, (name) => /\.AppImage$/i.test(name)) ||
    pickFirstAsset(fileAssets, (name) => /\.deb$/i.test(name)) ||
    pickFirstAsset(fileAssets, (name) => /\.rpm$/i.test(name))

  return {
    windows: windowsPrimary
      ? {
          url: windowsPrimary.url,
          path: windowsPrimary.name,
          asset: windowsPrimary.name,
        }
      : null,
    mac: macPrimary
      ? {
          url: macPrimary.url,
          path: macPrimary.name,
          asset: macPrimary.name,
        }
      : null,
    linux: linuxPrimary
      ? {
          url: linuxPrimary.url,
          path: linuxPrimary.name,
          asset: linuxPrimary.name,
          alternatives: fileAssets
            .filter((asset) => asset.name !== linuxPrimary.name && /\.(AppImage|deb|rpm)$/i.test(asset.name))
            .map((asset) => ({
              url: asset.url,
              path: asset.name,
              asset: asset.name,
            })),
        }
      : null,
  }
}

function buildCardsFromHighlights(highlights) {
  return (Array.isArray(highlights) ? highlights : []).slice(0, 3).map((description, index) => {
    const source = String(description || '').trim()
    const candidate = source.split(/[,:;]/)[0].trim()
    const title = candidate
      ? candidate.split(/\s+/).slice(0, 6).join(' ')
      : `Highlight ${index + 1}`

    return {
      title,
      description: source,
    }
  })
}

function hasMeaningfulCards(cards) {
  return (
    Array.isArray(cards) &&
    cards.length > 0 &&
    cards.some((card) => !/^Highlight \d+$/i.test(String(card?.title || '').trim()))
  )
}

function mergeDownloads(preferred, fallback) {
  return {
    windows: preferred?.windows || fallback?.windows || null,
    mac: preferred?.mac || fallback?.mac || null,
    linux: preferred?.linux || fallback?.linux || null,
  }
}

function normalizeReleaseMeta(base, releaseInfo = {}) {
  const version = stripTagPrefix(base?.version || releaseInfo?.tagName || fallbackReleaseMeta.version)
  const fallbackMatchesVersion = version === fallbackReleaseMeta.version
  const highlights =
    Array.isArray(base?.highlights) && base.highlights.length > 0
      ? base.highlights
      : fallbackMatchesVersion
        ? fallbackReleaseMeta.highlights
        : []
  const cards = hasMeaningfulCards(base?.cards)
    ? base.cards.slice(0, 3)
    : fallbackMatchesVersion && hasMeaningfulCards(fallbackReleaseMeta.cards)
      ? fallbackReleaseMeta.cards.slice(0, 3)
      : buildCardsFromHighlights(highlights)

  return {
    ...fallbackReleaseMeta,
    ...base,
    version,
    date: String(base?.date || releaseInfo?.publishedAt || fallbackReleaseMeta.date).slice(0, 10),
    badge:
      String(base?.badge || '').trim() ||
      (fallbackMatchesVersion ? fallbackReleaseMeta.badge : buildBadge(releaseInfo?.tagName, releaseInfo?.isPrerelease)),
    title:
      String(base?.title || '').trim() ||
      (fallbackMatchesVersion ? fallbackReleaseMeta.title : `Release ${version}`),
    summary:
      String(base?.summary || '').trim() ||
      (fallbackMatchesVersion
        ? fallbackReleaseMeta.summary
        : 'Release mais recente disponivel via GitHub Releases para Windows, macOS e Linux.'),
    cards,
    highlights,
    requirements: {
      ...fallbackReleaseMeta.requirements,
      ...(base?.requirements || {}),
    },
    downloadFormats: {
      ...fallbackReleaseMeta.downloadFormats,
      ...(base?.downloadFormats || {}),
    },
    downloads: mergeDownloads(base?.downloads || null, null),
    releasePageUrl: RELEASE_PAGE_URL,
  }
}

async function fetchJson(url, userAgent, accept = 'application/vnd.github+json, application/json') {
  const response = await fetch(url, {
    headers: {
      Accept: accept,
      'User-Agent': userAgent,
    },
    redirect: 'follow',
  })

  if (!response.ok) {
    return null
  }

  const contentType = response.headers.get('content-type') || ''
  if (contentType.includes('text/html')) {
    return null
  }

  return response.json()
}

async function fetchLatestManifest() {
  return fetchJson(
    `${RELEASE_PAGE_URL}/download/${RELEASE_MANIFEST_FILE}`,
    'botassist-site-release-manifest',
    'application/octet-stream'
  )
}

async function fetchLatestRelease() {
  return fetchJson(
    `https://api.github.com/repos/${OWNER}/${REPO}/releases/latest`,
    'botassist-site-latest-release'
  )
}

export async function fetchLatestReleaseMeta() {
  const [manifest, latestRelease] = await Promise.all([
    fetchLatestManifest().catch(() => null),
    fetchLatestRelease().catch(() => null),
  ])

  if (manifest) {
    const releaseDownloads = latestRelease ? pickPrimaryDownloads(latestRelease.assets) : null
    const releaseInfo = latestRelease
      ? {
          tagName: latestRelease.tag_name,
          publishedAt: latestRelease.published_at,
          isPrerelease: latestRelease.prerelease,
        }
      : {
          tagName: `v${manifest.version}`,
          publishedAt: manifest.date,
          isPrerelease: Boolean(manifest.isPrerelease),
        }

    const normalized = normalizeReleaseMeta(manifest, releaseInfo)
    normalized.downloads = mergeDownloads(normalized.downloads, releaseDownloads)
    return normalized
  }

  if (latestRelease) {
    return normalizeReleaseMeta(
      {
        downloads: pickPrimaryDownloads(latestRelease.assets),
      },
      {
        tagName: latestRelease.tag_name,
        publishedAt: latestRelease.published_at,
        isPrerelease: latestRelease.prerelease,
      }
    )
  }

  return normalizeReleaseMeta(fallbackReleaseMeta, {
    tagName: `v${fallbackReleaseMeta.version}`,
    publishedAt: fallbackReleaseMeta.date,
    isPrerelease: false,
  })
}
