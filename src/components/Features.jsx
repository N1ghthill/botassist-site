import { Shield, Settings, Users, Brain, Lock, Zap, Wrench, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Controle operacional local',
    description: 'Owner por token, grupos autorizados e politicas claras para nao perder o controle do fluxo.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Brain,
    title: 'Resposta rapida com IA',
    description: 'Perfis e provedor alinhados para responder com menos friccao e mais previsibilidade na linha estavel.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Settings,
    title: 'Onboarding sem improviso',
    description: 'Setup guiado para API key, owner, preferencias basicas e primeiro perfil sem depender de terminal.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Lock,
    title: 'Runtime endurecido',
    description: 'Electron mais travado, renderer em app://, fuses ativos e navegacao externa mais restrita.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Users,
    title: 'Perfis por contexto',
    description: 'Defina estilos, prompts e comportamento por usuario, grupo ou tipo de conversa.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: Zap,
    title: 'Ritmo sob controle',
    description: 'Cooldown por chat, limites e configuracoes para evitar excesso de resposta e ruido operacional.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Wrench,
    title: 'Tools com aprovacao',
    description: 'Web, arquivos, shell e e-mail sob politica local, auditoria e aprovacao manual quando fizer sentido.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: Smartphone,
    title: 'Distribuicao madura',
    description: 'Assets dedicados, auto-update por canal e releases para Windows, macOS e Linux.',
    color: 'text-gray-600',
    bgColor: 'bg-gray-100'
  }
]

export default function Features() {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que voce ganha na pratica
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            O que hoje ja esta estavel para operar o BotAssist com menos improviso e mais controle
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className={`inline-flex p-3 rounded-lg ${feature.bgColor} mb-4`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
