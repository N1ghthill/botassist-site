import { Download, Settings, MessageSquare, Zap } from 'lucide-react'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: Download,
    title: 'Baixe e Instale',
    description: 'Faça download gratuito para Windows, macOS ou Linux e instale em segundos.',
    color: 'text-blue-600'
  },
  {
    number: '02',
    icon: Settings,
    title: 'Setup Básico Guiado',
    description: 'Siga o onboarding amigável para API Key, owner, preferências e perfil inicial.',
    color: 'text-green-600'
  },
  {
    number: '03',
    icon: MessageSquare,
    title: 'Conecte o WhatsApp',
    description: 'Escaneie o QR Code e pronto! Seu bot está conectado.',
    color: 'text-purple-600'
  },
  {
    number: '04',
    icon: Zap,
    title: 'Ative os Agentes e Tools',
    description: 'Personalize agentes e habilite tools para fluxos avançados com segurança.',
    color: 'text-orange-600'
  }
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Funciona em 4 Passos Simples
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Setup inicial guiado para começar rápido e evoluir com agentes e tools
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 transform -translate-y-1/2"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-gradient-to-br from-white to-gray-50 shadow-lg border border-gray-100 mb-6 relative z-10">
                    <span className="text-2xl font-bold text-gray-900">{step.number}</span>
                  </div>
                  
                  {/* Step Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-white shadow-lg mb-4 ${step.color} border border-gray-100`}>
                    <step.icon className="h-8 w-8" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 max-w-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para começar?
            </h3>
            <p className="text-gray-600 mb-6">
              Comece grátis e valide no seu próprio fluxo em poucos minutos.
            </p>
            <Link
              href="/#download"
              className="inline-flex items-center px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl focus-ring"
            >
              Baixar Agora - Grátis
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
