import { MessageSquare, Users, Wrench, ArrowRight, CheckCircle2, CircleOff } from 'lucide-react'
import Link from 'next/link'

const useCases = [
  {
    icon: MessageSquare,
    title: 'Atendimento inicial para negocios pequenos',
    description: 'Absorve perguntas recorrentes, coleta contexto e deixa o atendimento humano entrar com mais informacao.',
    outcome: 'Melhor quando existe volume repetitivo e alguem responsavel pela operacao.'
  },
  {
    icon: Users,
    title: 'Triagem de contatos e grupos',
    description: 'Classifica intencao, prioriza conversas e aplica perfis diferentes por grupo, contato ou contexto.',
    outcome: 'Melhor quando voce precisa organizar a fila e evitar resposta igual para todo mundo.'
  },
  {
    icon: Wrench,
    title: 'Operacao assistida pelo owner',
    description: 'Combina IA, web, arquivos e automacoes com aprovacao e politicas para manter o controle local.',
    outcome: 'Melhor quando a automacao precisa de supervisao e historico local.'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Onde o BotAssist encaixa melhor
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tres cenarios em que o produto tende a entregar valor rapido hoje, sem prometer um fit universal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {useCases.map((item) => {
            const Icon = item.icon
            return (
              <article
                key={item.title}
                className="rounded-2xl border border-gray-200 bg-gray-50/70 p-6 shadow-sm"
              >
                <div className="h-12 w-12 rounded-xl bg-primary-100 text-primary-700 flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <p className="mt-4 text-sm font-semibold text-primary-700">{item.outcome}</p>
              </article>
            )
          })}
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-primary-100 bg-primary-50 p-6">
            <div className="flex items-center gap-3 text-primary-800">
              <CheckCircle2 className="h-5 w-5" />
              <h3 className="text-lg font-bold">Bom fit se voce quer</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>Instalar localmente e validar um fluxo real com rapidez.</li>
              <li>Operar com owner claro, time pequeno ou uso interno supervisionado.</li>
              <li>Controlar tools, politicas e canais sem depender de SaaS.</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6">
            <div className="flex items-center gap-3 text-gray-700">
              <CircleOff className="h-5 w-5" />
              <h3 className="text-lg font-bold">Talvez nao seja o melhor fit se voce precisa</h3>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-gray-700">
              <li>Plataforma omnichannel multiusuario completa com operacao sem dono definido.</li>
              <li>Automacao sem supervisao humana ou garantia de resultado comercial.</li>
              <li>Fluxo enterprise pronto de ponta a ponta sem configuracao local.</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-primary-100 bg-primary-50 p-6 text-center">
          <p className="text-sm text-gray-700">
            Estes cenarios sao exemplos de fit e nao representam resultado garantido.
          </p>
          <Link
            href="/#download"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
          >
            Validar no meu fluxo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
