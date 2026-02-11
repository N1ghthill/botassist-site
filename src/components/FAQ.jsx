import { ChevronDown, HelpCircle, Shield, Zap, MessageSquare, CreditCard } from 'lucide-react'
import { useState } from 'react'

const faqs = [
  {
    question: 'O BotAssist é seguro? Risco de ban?',
    answer: 'Totalmente seguro! O modo anti-ban garante que o bot só responda quando mencionado e apenas em grupos autorizados. Usamos as melhores práticas recomendadas pela comunidade para evitar bloqueios.',
    icon: Shield
  },
  {
    question: 'Preciso de conhecimento técnico?',
    answer: 'Não. O setup inicial agora é guiado e cobre configuração básica em etapas claras, desde API Key até conexão do WhatsApp.',
    icon: HelpCircle
  },
  {
    question: 'Quanto custa a API da Groq?',
    answer: 'A Groq oferece créditos gratuitos para começar. Consulte os preços atuais em groq.com. O BotAssist em si é 100% gratuito!',
    icon: CreditCard
  },
  {
    question: 'Funciona em grupos?',
    answer: 'Sim! Com o modo grupos ativado, o bot responde quando mencionado. Você pode configurar allowlist de grupos específicos.',
    icon: MessageSquare
  },
  {
    question: 'Quais sistemas operacionais são suportados?',
    answer: 'Windows 10/11, macOS 10.14+, e Linux (Ubuntu 20.04+, Fedora, etc). Downloads disponíveis para cada plataforma.',
    icon: Zap
  },
  {
    question: 'Posso personalizar agentes e usar tools?',
    answer: 'Sim. Você pode criar agentes com prompts e modelos diferentes, além de habilitar tools de forma controlada para fluxos avançados.',
    icon: Zap
  },
  {
    question: 'Posso usar meu próprio modelo de IA?',
    answer: 'Atualmente suportamos a Groq API, mas estamos trabalhando em suporte para OpenAI, Anthropic e modelos locais via Ollama.',
    icon: Zap
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tire suas dúvidas sobre o BotAssist
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="mb-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left"
              >
                <div className="flex items-center">
                  <div className="p-2 rounded-lg bg-primary-100 mr-4">
                    <faq.icon className="h-5 w-5 text-primary-600" />
                  </div>
                  <span className="font-semibold text-gray-900">
                    {faq.question}
                  </span>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4 pl-16">
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Support CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Encontrou um problema?
            </h3>
            <p className="text-gray-600 mb-6">
              Abra uma issue (preferencial) ou envie um e-mail. Como é um projeto gratuito, não há garantia de resposta, mas todo reporte ajuda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:irving@ruas.dev.br"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
              >
                Enviar e-mail
              </a>
              <a
                href="https://github.com/N1ghthill/botassist-whatsapp/issues"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-800 text-white font-semibold hover:bg-gray-900 transition-colors"
              >
                Abrir issue no GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
