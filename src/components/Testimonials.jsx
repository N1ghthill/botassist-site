import { Bug, Github, Mail, MessageCircle } from 'lucide-react'

export default function Testimonials() {
  return (
    <section id="report-issues" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Relate problemas e sugestões
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O BotAssist é gratuito e evolui com feedback da comunidade. Se algo não funcionar, relate aqui.
          </p>
          <p className="text-sm text-gray-500 max-w-3xl mx-auto mt-4">
            Não há garantia de suporte individual ou de compatibilidade com todas as máquinas/ambientes. Ainda assim, todo reporte bem detalhado ajuda muito.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <a
            href="https://github.com/N1ghthill/botassist-whatsapp/issues"
            target="_blank"
            rel="noreferrer"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="text-primary-600 mb-4">
              <Github className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Abrir issue no GitHub</h3>
            <p className="text-gray-600">
              Melhor para bugs, prints, logs e passos para reproduzir.
            </p>
          </a>

          <a
            href="mailto:irving@ruas.dev.br?subject=BotAssist%20-%20Relato%20de%20problema"
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
          >
            <div className="text-primary-600 mb-4">
              <Mail className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Enviar por e-mail</h3>
            <p className="text-gray-600">
              Use para assuntos sensíveis (dados, prints com informações privadas).
            </p>
          </a>

          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
            <div className="text-primary-600 mb-4">
              <Bug className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Como reportar melhor</h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>Sistema operacional, versão do app e onde instalou</span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>Passos para reproduzir + logs/prints (se possível)</span>
              </li>
              <li className="flex items-start">
                <MessageCircle className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>O que você esperava vs. o que aconteceu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
