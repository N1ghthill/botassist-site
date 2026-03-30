import { Shield, Zap, ArrowRight, ShieldCheck, Layers, Sliders, Sparkles } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { releaseMeta } from '../lib/releaseMeta'

export default function Hero() {
  const cardIcons = [ShieldCheck, Layers, Sliders]
  const cards = Array.isArray(releaseMeta.cards) ? releaseMeta.cards.slice(0, 3) : []

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold mb-8">
            <Shield className="h-4 w-4 mr-2" />
            Atualizacao {releaseMeta.version} • {releaseMeta.badge}
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Assistente desktop para
            <span className="block text-primary-600 mt-2">WhatsApp com IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            BotAssist e um assistente desktop para WhatsApp com IA, perfis, setup guiado, tools opt-in seguras e auto-update.
            Hoje a linha estavel entrega uma operacao mais madura no Windows, macOS e Linux.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <Link
              href="/#download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl focus-ring"
            >
              Download Gratuito
              <ArrowRight className="ml-3 h-5 w-5" />
            </Link>
            <Link
              href="/#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-800 font-semibold border-2 border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-colors focus-ring"
            >
              <Zap className="mr-3 h-5 w-5" />
              Ver Funcionalidades
            </Link>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 text-sm text-gray-600">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-gray-200">Sem cadastro</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-gray-200">Código aberto (MIT)</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-gray-200">Auto-update por canal</span>
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1 border border-gray-200">Download direto do GitHub Releases</span>
          </div>

          <p className="text-sm text-gray-500 max-w-2xl mx-auto mb-12">
            Este site é <span className="font-semibold text-gray-700">software livre (MIT)</span>. Contribuições são bem-vindas.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">Grátis</div>
              <div className="text-gray-600">Para usar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">Owner</div>
              <div className="text-gray-600">Por token no WhatsApp</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">Tools</div>
              <div className="text-gray-600">Com auditoria e aprovacao</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">3 SOs</div>
              <div className="text-gray-600">Windows, macOS e Linux</div>
            </div>
          </div>
        </div>

        {/* Hero Highlights */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative rounded-[32px] overflow-hidden border border-white/70 bg-white/80 shadow-[0_40px_90px_-50px_rgba(15,23,42,0.35)]">
            <div className="absolute -top-24 -right-16 h-56 w-56 bg-primary-400/25 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-16 h-56 w-56 bg-secondary-400/20 blur-3xl"></div>
            <div className="relative p-8 lg:p-10 grid gap-10 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-primary-700 font-semibold shadow-sm ring-1 ring-gray-200/70">
                  <Sparkles className="h-4 w-4" />
                  Novidades da release {releaseMeta.version}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-6 items-start">
                  <div className="rounded-3xl bg-white p-4 shadow-xl ring-1 ring-gray-200/70">
                    <Image
                      src="/botassist_logo.png"
                      alt="BotAssist"
                      width={260}
                      height={160}
                      className="h-20 sm:h-24 w-auto"
                    />
                  </div>
                  <div className="max-w-md">
                    <h3 className="text-2xl md:text-3xl font-bold text-gray-900 font-display">
                      {releaseMeta.title}
                    </h3>
                    <p className="text-gray-600 mt-3">
                      {releaseMeta.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-3">
                  {cards.map((item, index) => {
                    const Icon = cardIcons[index] || Sparkles
                    return (
                      <div
                        key={item.title}
                        className="rounded-2xl border border-gray-200/70 bg-white/90 p-4 shadow-sm"
                      >
                        <div className="h-10 w-10 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-3">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{item.title}</div>
                        <p className="text-xs text-gray-600 mt-1">{item.description}</p>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-2xl border border-gray-200/70 bg-white/90 p-5 shadow-sm">
                  <div className="text-xs uppercase tracking-[0.2em] text-gray-500">Setup rapido</div>
                  <div className="mt-4 space-y-3 text-sm text-gray-700">
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                      Gere um token de owner e reivindique no WhatsApp.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                      Ative tools com politicas de acesso, auditoria local e aprovacao manual quando necessario.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary-600"></span>
                      Atualize pelo canal de release certo no Windows, macOS ou Linux.
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl border border-gray-200/70 bg-gradient-to-br from-primary-600 to-secondary-600 text-white p-5 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs uppercase tracking-[0.2em] text-white/70">Disponivel agora</div>
                      <div className="text-2xl font-bold font-display mt-1">BotAssist {releaseMeta.version}</div>
                    </div>
                    <div className="h-10 w-10 rounded-2xl bg-white/15 flex items-center justify-center">
                      <Image src="/icon.png" alt="BotAssist" width={24} height={24} className="h-6 w-6" />
                    </div>
                  </div>
                  <p className="text-sm text-white/80 mt-4">
                    {releaseMeta.summary}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
