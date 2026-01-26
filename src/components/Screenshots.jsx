import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'
import Image from 'next/image'
import { useState } from 'react'

const screenshots = [
  {
    id: 1,
    title: 'Interface Principal',
    description: 'Controle total do bot em uma interface intuitiva',
    image: '/screenshot-1.jpg',
    alt: 'Interface principal do BotAssist'
  },
  {
    id: 2,
    title: 'Configurações Avançadas',
    description: 'Ajuste fino de todas as funcionalidades',
    image: '/screenshot-2.jpg',
    alt: 'Configurações do BotAssist'
  },
  {
    id: 3,
    title: 'Logs em Tempo Real',
    description: 'Monitore todas as atividades do bot',
    image: '/screenshot-3.jpg',
    alt: 'Logs do BotAssist'
  }
]

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isFullscreen, setIsFullscreen] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length)
  }

  return (
    <section id="screenshots" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interface Intuitiva e Poderosa
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Veja como é fácil controlar seu bot com nossa interface gráfica
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {isFullscreen && (
            <div
              className="fixed inset-0 z-50 bg-black/80 p-4 flex items-center justify-center"
              role="dialog"
              aria-modal="true"
              aria-label="Screenshot em tela cheia"
              onClick={() => setIsFullscreen(false)}
            >
              <div className="w-full max-w-6xl" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-end mb-3">
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="px-4 py-2 rounded-lg bg-white/10 text-white hover:bg-white/20 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
                <div className="bg-black rounded-xl overflow-hidden">
                  <Image
                    src={screenshots[currentSlide].image}
                    alt={screenshots[currentSlide].alt}
                    width={1280}
                    height={720}
                    sizes="100vw"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Carousel */}
          <div className="relative bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Screenshot Display */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
              <div className="absolute top-4 left-4 flex space-x-2">
                <div className="h-3 w-3 rounded-full bg-red-500"></div>
                <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                <div className="h-3 w-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Current Screenshot */}
              <div className="absolute inset-8 bg-black rounded-lg overflow-hidden">
                <Image
                  src={screenshots[currentSlide].image}
                  alt={screenshots[currentSlide].alt}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Screenshot Info */}
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {screenshots[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 mt-1">
                    {screenshots[currentSlide].description}
                  </p>
                </div>
                <button
                  onClick={() => setIsFullscreen(!isFullscreen)}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <Maximize2 className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between p-6 border-t border-gray-100">
              <div className="flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === currentSlide 
                        ? 'w-8 bg-primary-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnails */}
          <div className="grid grid-cols-3 gap-4 mt-8">
            {screenshots.map((screenshot, index) => (
              <button
                key={screenshot.id}
                onClick={() => setCurrentSlide(index)}
                className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                  index === currentSlide 
                    ? 'border-primary-500 shadow-lg' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="relative aspect-video bg-black">
                  <Image
                    src={screenshot.image}
                    alt={screenshot.alt}
                    fill
                    sizes="(max-width: 768px) 33vw, 240px"
                    className="object-cover"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
