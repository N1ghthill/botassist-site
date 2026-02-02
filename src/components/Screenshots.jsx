import Image from 'next/image'
import { useState } from 'react'
import { ArrowUpRight, Sparkles } from 'lucide-react'

const screenshotItems = [
  {
    id: 'dashboard',
    title: 'Dashboard ao vivo',
    description: 'Status, QR Code e resumo do bot em tempo real.',
    image: '/screenshots/dashboard.png',
    tag: 'Visao Geral',
    highlights: ['Status imediato', 'QR Code rapido', 'Atalhos diretos', 'Resumo de atividade'],
    theme: 'emerald'
  },
  {
    id: 'configs',
    title: 'Configurações por perfil',
    description: 'Perfis, prompts e controles essenciais em um fluxo simples.',
    image: '/screenshots/configs.png',
    tag: 'Configurações',
    highlights: ['Perfis de agentes', 'Modelos e prompts', 'Regras de acesso', 'Anti-ban'],
    theme: 'blue'
  },
  {
    id: 'logs',
    title: 'Logs e monitoramento',
    description: 'Acompanhe eventos, respostas e falhas com clareza.',
    image: '/screenshots/logs.png',
    tag: 'Observabilidade',
    highlights: ['Logs filtrados', 'Erros destacados', 'Exportacao rapida', 'Diagnostico agil'],
    theme: 'amber'
  },
  {
    id: 'database',
    title: 'Sessões e backups',
    description: 'Tudo organizado: backups locais, reset e controle de dados.',
    image: '/screenshots/database.png',
    tag: 'Dados',
    highlights: ['Backup local', 'Reset seguro', 'Sessao protegida', 'Recuperacao simples'],
    theme: 'violet'
  },
  {
    id: 'update',
    title: 'Atualizações automatizadas',
    description: 'Builds e updates com aviso, sem dor de cabeca.',
    image: '/screenshots/auto-update.png',
    tag: 'Auto-update',
    highlights: ['Release check', 'Instalacao guiada', 'Sem downtime', 'Notificacoes claras'],
    theme: 'lime'
  }
]

const themeStyles = {
  emerald: {
    chip: 'bg-emerald-500/15 text-emerald-200 border-emerald-400/30',
    glow: 'from-emerald-400/25 via-emerald-500/10 to-transparent',
    dot: 'bg-emerald-400',
    accent: 'text-emerald-200'
  },
  blue: {
    chip: 'bg-blue-500/15 text-blue-200 border-blue-400/30',
    glow: 'from-blue-400/25 via-blue-500/10 to-transparent',
    dot: 'bg-blue-400',
    accent: 'text-blue-200'
  },
  amber: {
    chip: 'bg-amber-500/15 text-amber-200 border-amber-400/30',
    glow: 'from-amber-400/25 via-amber-500/10 to-transparent',
    dot: 'bg-amber-400',
    accent: 'text-amber-200'
  },
  violet: {
    chip: 'bg-violet-500/15 text-violet-200 border-violet-400/30',
    glow: 'from-violet-400/25 via-violet-500/10 to-transparent',
    dot: 'bg-violet-400',
    accent: 'text-violet-200'
  },
  lime: {
    chip: 'bg-lime-500/15 text-lime-200 border-lime-400/30',
    glow: 'from-lime-400/25 via-lime-500/10 to-transparent',
    dot: 'bg-lime-400',
    accent: 'text-lime-200'
  }
}

export default function Screenshots() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeItem = screenshotItems[activeIndex]
  const activeTheme = themeStyles[activeItem.theme]

  return (
    <section id="screenshots" className="py-24 bg-slate-950 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(16,185,129,0.25),transparent_55%),radial-gradient(circle_at_90%_10%,rgba(79,99,240,0.2),transparent_45%)]"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs uppercase tracking-[0.2em] text-white/70 mb-5">
            <Sparkles className="h-4 w-4 text-emerald-300" />
            Nova Interface
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Screenshots que explicam o poder do BotAssist
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Passe por cada tela e veja como o BotAssist organiza as funcoes mais importantes em um fluxo simples.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-12 items-start">
          <div className="hidden lg:flex lg:col-span-5 flex-col gap-4">
            {screenshotItems.map((item, index) => {
              const theme = themeStyles[item.theme]
              const isActive = index === activeIndex
              return (
                <button
                  key={item.id}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  className={`text-left rounded-2xl border transition-all px-5 py-4 ${
                    isActive
                      ? 'border-white/30 bg-white/10 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.7)]'
                      : 'border-white/10 bg-white/5 hover:bg-white/10'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="flex items-start gap-4">
                    <div className="relative h-16 w-24 rounded-xl overflow-hidden border border-white/10 bg-black/40">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="96px"
                        className="object-contain"
                      />
                      <span className={`absolute top-2 left-2 text-[10px] px-2 py-1 rounded-full border border-white/10 ${theme.chip}`}>
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="text-lg font-semibold font-display">{item.title}</span>
                        <ArrowUpRight className={`h-4 w-4 ${theme.accent}`} />
                      </div>
                      <p className="text-sm text-white/70 mt-1">{item.description}</p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {item.highlights.slice(0, 2).map((highlight) => (
                          <span
                            key={highlight}
                            className="text-[11px] uppercase tracking-[0.15em] text-white/50"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-3xl border border-white/10 bg-slate-950/70 shadow-2xl overflow-hidden">
              <div
                className={`pointer-events-none absolute inset-0 opacity-80 bg-gradient-to-br ${activeTheme.glow}`}
              ></div>
              <div className="relative p-6 sm:p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-white/50">
                  <span>{activeItem.tag}</span>
                  <span>{String(activeIndex + 1).padStart(2, '0')} / {String(screenshotItems.length).padStart(2, '0')}</span>
                </div>

                <div className="relative mt-5 aspect-[16/10] rounded-2xl border border-white/10 bg-black/40 overflow-hidden">
                  <Image
                    src={activeItem.image}
                    alt={activeItem.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 720px"
                    className="object-contain"
                  />
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {activeItem.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                    >
                      <span className={`h-2 w-2 rounded-full ${activeTheme.dot}`}></span>
                      <span className="text-sm text-white/80">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 lg:hidden">
              {screenshotItems.map((item) => {
                const theme = themeStyles[item.theme]
                return (
                  <div key={item.id} className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden">
                    <div className="relative aspect-[16/10] bg-black/40">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="100vw"
                        className="object-contain"
                      />
                    </div>
                    <div className="p-5">
                      <span className={`inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] ${theme.accent}`}>
                        <span className={`h-2 w-2 rounded-full ${theme.dot}`}></span>
                        {item.tag}
                      </span>
                      <h3 className="mt-3 text-lg font-semibold font-display">{item.title}</h3>
                      <p className="text-sm text-white/70 mt-2">{item.description}</p>
                      <div className="mt-4 grid gap-2">
                        {item.highlights.map((highlight) => (
                          <div
                            key={highlight}
                            className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3 py-2"
                          >
                            <span className={`h-2 w-2 rounded-full ${theme.dot}`}></span>
                            <span className="text-sm text-white/80">{highlight}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
