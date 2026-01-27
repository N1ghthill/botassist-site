import { Download as DownloadIcon, Monitor, Apple, Terminal } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'
import DonateButtons from './DonateButtons'

const Download = () => {
  const downloads = useMemo(
    () => [
      {
        platform: 'windows',
        os: 'Windows',
        icon: Monitor,
        fileSize: '85 MB',
        requirements: 'Windows 10/11 64-bit'
      },
      {
        platform: 'mac',
        os: 'macOS',
        icon: Apple,
        fileSize: '92 MB',
        requirements: 'macOS 10.14+'
      },
      {
        platform: 'linux',
        os: 'Linux',
        icon: Terminal,
        fileSize: '78 MB',
        requirements: 'Ubuntu 20.04+ / Fedora 32+'
      }
    ],
    []
  )

  const [releaseByPlatform, setReleaseByPlatform] = useState({})

  useEffect(() => {
    let cancelled = false

    async function load() {
      const entries = await Promise.all(
        downloads.map(async ({ platform }) => {
          const response = await fetch(`/api/latest-download?platform=${platform}`)
          const data = await response.json()
          return [platform, data]
        })
      )

      if (!cancelled) {
        setReleaseByPlatform(Object.fromEntries(entries))
      }
    }

    load().catch(() => {})
    return () => {
      cancelled = true
    }
  }, [downloads])

  return (
    <section id="download" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Baixe o BotAssist Agora
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Totalmente gratuito. Comece em menos de 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon
            const release = releaseByPlatform[item.platform]
            const versionLabel = release?.version ? `v${release.version}` : 'Última versão'
            const fallbackHref = 'https://github.com/N1ghthill/botassist-whatsapp/releases/latest'
            const href = release?.url || fallbackHref
            const hasLoaded = Boolean(release)
            const hasDirectAsset = Boolean(release?.path)
            const buttonLabel = !hasLoaded
              ? 'Abrir downloads'
              : hasDirectAsset
                ? `Baixar para ${item.os}`
                : 'Abrir downloads'

            return (
              <div key={index} className="bg-white rounded-2xl shadow-xl p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-10 w-10 text-gray-700" />
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                    {versionLabel}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.os}</h3>
                <p className="text-gray-600 mb-4">Tamanho: {item.fileSize}</p>
                <p className="text-gray-600 mb-6">{item.requirements}</p>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center font-bold py-3 px-4 rounded-lg transition-colors bg-blue-600 hover:bg-blue-700 text-white"
                >
                  <DownloadIcon className="inline-block mr-2 h-5 w-5" />
                  {buttonLabel}
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-14 text-center">
          <div className="inline-block bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Apoie o projeto (opcional)
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              O BotAssist é gratuito. Se ele te ajudou, você pode apoiar com um cafezinho para manter o projeto vivo.
            </p>
            <DonateButtons />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download  // ← ISSO É ESSENCIAL!
