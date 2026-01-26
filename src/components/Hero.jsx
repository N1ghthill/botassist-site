import { MessageSquare, Shield, Zap, ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 font-semibold mb-8">
            <Shield className="h-4 w-4 mr-2" />
            Modo Anti-Ban • Segurança Garantida
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Automatize conversas no
            <span className="block text-primary-600 mt-2">WhatsApp com IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            BotAssist é a ferramenta gráfica que conecta seu WhatsApp à Groq AI com total segurança. 
            Controle absoluto, modo anti-ban e configuração fácil.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#download"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary-600 text-white font-bold text-lg hover:bg-primary-700 transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Download Gratuito
              <ArrowRight className="ml-3 h-5 w-5" />
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-white text-gray-800 font-semibold border-2 border-gray-200 hover:border-primary-300 hover:bg-gray-50 transition-colors"
            >
              <Zap className="mr-3 h-5 w-5" />
              Ver Funcionalidades
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">100%</div>
              <div className="text-gray-600">Seguro</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">0</div>
              <div className="text-gray-600">Risco de Ban</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">24/7</div>
              <div className="text-gray-600">Disponível</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600">∞</div>
              <div className="text-gray-600">Personalizável</div>
            </div>
          </div>
        </div>

        {/* Hero Image/Preview */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-secondary-500/20 animate-gradient"></div>
            <div className="relative bg-white p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-center">
                <MessageSquare className="h-24 w-24 text-primary-400 mx-auto mb-6 animate-float" />
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Interface Gráfica Intuitiva
                </h3>
                <p className="text-gray-600">
                  Configure seu bot em minutos com nossa interface amigável
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
