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
            100% gratuito para Windows, macOS e Linux. Comece com setup guiado em menos de 5 minutos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {downloads.map((item, index) => {
            const Icon = item.icon
            const release = releaseByPlatform[item.platform]
            const versionRaw = release?.version
            const versionLabel = versionRaw
              ? versionRaw.startsWith('v')
                ? versionRaw
                : `v${versionRaw}`
              : 'Última versão'
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
              <div
                key={index}
                className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-10 w-10 text-gray-700" />
                  <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm font-semibold">
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
                  className="w-full inline-flex items-center justify-center font-bold py-3 px-4 rounded-xl transition-colors bg-primary-600 hover:bg-primary-700 text-white focus-ring"
                >
                  <DownloadIcon className="inline-block mr-2 h-5 w-5" />
                  {buttonLabel}
                </a>
              </div>
            )
          })}
        </div>

        <div className="mt-16">
          <div className="rounded-3xl border border-amber-200/70 bg-gradient-to-br from-amber-50 via-yellow-50 to-white p-8 md:p-10 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center gap-8">
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Apoie o projeto (doação opcional)
                </h3>
                <p className="text-gray-700 mt-3 max-w-2xl">
                  Este repositório é o site, mas o objetivo é o mesmo: apoiar um software livre, gratuito e de qualidade.
                  Se o BotAssist te ajudou, sua doação contribui com builds, melhorias e tempo de manutenção.
                </p>
                <p className="text-sm text-gray-600 mt-4">
                  Prefere não doar? Sem problema: contribua com ideias ou código no GitHub.
                </p>
              </div>
              <div className="flex-1">
                <DonateButtons theme="light" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Download  // ← ISSO É ESSENCIAL!
