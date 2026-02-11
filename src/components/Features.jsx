import { Shield, Settings, Users, Brain, Lock, Zap, Wrench, Smartphone } from 'lucide-react'

const features = [
  {
    icon: Shield,
    title: 'Modo Anti-Ban',
    description: 'Só responde quando mencionado e apenas em grupos autorizados. Configurações inteligentes para evitar bloqueios.',
    color: 'text-green-600',
    bgColor: 'bg-green-100'
  },
  {
    icon: Brain,
    title: 'Groq AI Integrada',
    description: 'Respostas inteligentes com modelos rápidos e de alta qualidade, em uma interface simples.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Settings,
    title: 'Setup Guiado',
    description: 'Configuração básica assistida em 4 etapas para conectar o bot sem complicação.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-100'
  },
  {
    icon: Lock,
    title: 'Segurança Total',
    description: 'Allowlist de usuários e grupos. Configurações persistentes e protegidas.',
    color: 'text-red-600',
    bgColor: 'bg-red-100'
  },
  {
    icon: Users,
    title: 'Agentes Personalizáveis',
    description: 'Crie perfis com prompts, modelo, estilo de resposta e roteamento por usuário/grupo.',
    color: 'text-yellow-600',
    bgColor: 'bg-yellow-100'
  },
  {
    icon: Zap,
    title: 'Performance Otimizada',
    description: 'Cooldown configurável por chat, limite de caracteres e gestão eficiente de recursos.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-100'
  },
  {
    icon: Wrench,
    title: 'Tools Poderosas',
    description: 'Web, arquivos e automações com controle do owner, auditoria local e operação segura.',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-100'
  },
  {
    icon: Smartphone,
    title: 'Multiplataforma',
    description: '100% grátis para Windows, macOS e Linux, com downloads dedicados por plataforma.',
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
            Por que escolher o BotAssist?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa em uma única ferramenta profissional
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
