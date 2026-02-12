import { MessageSquare, Users, Wrench, ArrowRight } from 'lucide-react'
import Link from 'next/link'

const useCases = [
  {
    icon: MessageSquare,
    title: 'Atendimento inicial',
    description: 'Exemplo: responder perguntas frequentes, coletar contexto e manter o time livre para casos complexos.',
    outcome: 'Possivel ganho: menos retrabalho com mensagens repetidas.'
  },
  {
    icon: Users,
    title: 'Triagem de contatos',
    description: 'Exemplo: direcionar conversas por perfil de cliente, grupo ou intencao com regras e agentes personalizados.',
    outcome: 'Possivel ganho: fluxo mais organizado para priorizar respostas.'
  },
  {
    icon: Wrench,
    title: 'Operação assistida com tools',
    description: 'Exemplo: usar web, arquivos e automacoes com controle do owner e aprovacao quando necessario.',
    outcome: 'Possivel ganho: mais autonomia sem abrir mao de seguranca operacional.'
  }
]

export default function UseCases() {
  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Possibilidades de uso
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Abaixo estao exemplos ilustrativos de como o BotAssist pode ser configurado no WhatsApp.
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

        <div className="mt-12 rounded-2xl border border-primary-100 bg-primary-50 p-6 text-center">
          <p className="text-sm text-gray-700">
            Estes itens sao exemplos e nao representam resultados garantidos.
          </p>
          <Link
            href="/#download"
            className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
          >
            Testar no meu fluxo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
