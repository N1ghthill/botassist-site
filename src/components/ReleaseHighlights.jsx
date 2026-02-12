import { Sparkles, Wrench, Layers, Rocket } from 'lucide-react'
import Link from 'next/link'
import { releaseMeta } from '../lib/releaseMeta'

const highlights = [
  {
    icon: Rocket,
    title: 'Owner por token no WhatsApp',
    description: 'Defina owner por comando com token temporario para onboarding mais seguro.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Wrench,
    title: 'Setup alinhado ao fluxo real',
    description: 'Etapa de owner atualizada para o metodo por token no setup inicial.',
    color: 'text-emerald-600',
    bgColor: 'bg-emerald-100'
  },
  {
    icon: Layers,
    title: 'Sincronizacao bot -> UI',
    description: 'Alteracoes de configuracao feitas pelo bot aparecem automaticamente na interface.',
    color: 'text-violet-600',
    bgColor: 'bg-violet-100'
  }
]

export default function ReleaseHighlights() {
  return (
    <section id="release-highlights" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-primary-100 bg-white/90 p-8 md:p-10 shadow-xl shadow-primary-900/5">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold">
                <Sparkles className="h-4 w-4" />
                Novidades da versao {releaseMeta.version}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
                Fluxo de owner mais seguro e interface sincronizada
              </h2>
              <p className="text-gray-600 mt-3 max-w-2xl">
                {releaseMeta.summary}
              </p>
            </div>
            <div className="flex-shrink-0">
              <Link
                href="/#download"
                className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
              >
                Testar agora no seu sistema
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item) => {
              const Icon = item.icon
              return (
                <article
                  key={item.title}
                  className="rounded-2xl border border-gray-100 bg-gray-50/70 p-6 shadow-sm"
                >
                  <div className={`inline-flex p-3 rounded-xl ${item.bgColor} mb-4`}>
                    <Icon className={`h-6 w-6 ${item.color}`} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </article>
              )
            })}
          </div>

          <p className="text-sm text-gray-600 mt-8">
            Disponível gratuitamente para Windows, macOS e Linux.
          </p>
        </div>
      </div>
    </section>
  )
}
