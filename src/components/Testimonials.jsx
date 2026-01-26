import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Carlos Silva',
    role: 'Social Media Manager',
    content: 'O BotAssist revolucionou como gerencio conversas no WhatsApp. A IA é incrívelmente precisa e o modo anti-ban dá total segurança.',
    rating: 5,
    avatar: 'CS'
  },
  {
    name: 'Ana Santos',
    role: 'Empreendedora',
    content: 'Configuração super fácil! Em 10 minutos já tinha meu bot funcionando. A interface gráfica torna tudo muito simples.',
    rating: 5,
    avatar: 'AS'
  },
  {
    name: 'Miguel Costa',
    role: 'Desenvolvedor',
    content: 'Como desenvolvedor, aprecio a arquitetura bem pensada e a documentação completa. Fácil de customizar e extender.',
    rating: 5,
    avatar: 'MC'
  }
]

export default function Testimonials() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que nossos usuários dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied users who trust BotAssist
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
            >
              {/* Quote Icon */}
              <div className="text-primary-500 mb-4">
                <Quote className="h-8 w-8" />
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-6 italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <span className="font-bold text-primary-600">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
          <div>
            <div className="text-3xl font-bold text-primary-600">1,000+</div>
            <div className="text-gray-600">Usuários Ativos</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">99%</div>
            <div className="text-gray-600">Satisfação</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">24/7</div>
            <div className="text-gray-600">Suporte</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-primary-600">10K+</div>
            <div className="text-gray-600">Mensagens/dia</div>
          </div>
        </div>
      </div>
    </section>
  )
}
