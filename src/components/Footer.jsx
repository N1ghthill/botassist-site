import { MessageSquare, Github, Mail, Globe } from 'lucide-react'
import Link from 'next/link'
import DonateButtons from './DonateButtons'

const footerLinks = {
  Produto: [
    { label: 'Funcionalidades', href: '#features' },
    { label: 'Como Funciona', href: '#how-it-works' },
    { label: 'Screenshots', href: '#screenshots' },
    { label: 'Download', href: '#download' }
  ],
  Recursos: [
    { label: 'Documentação', href: 'https://github.com/N1ghthill/botassist-whatsapp' },
    { label: 'GitHub', href: 'https://github.com/N1ghthill/botassist-whatsapp' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Relatar problema', href: '#report-issues' }
  ],
  Legal: [
    { label: 'Termos de Uso', href: '/terms' },
    { label: 'Política de Privacidade', href: '/privacy' },
    { label: 'Licença', href: 'https://github.com/N1ghthill/botassist-whatsapp' }
  ]
}

const socialLinks = [
  { icon: Github, label: 'GitHub', href: 'https://github.com/N1ghthill/botassist-whatsapp' },
  { icon: Mail, label: 'Email', href: 'mailto:irving@ruas.dev.br' }
]

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <MessageSquare className="h-8 w-8 text-primary-400" />
              <div>
                <span className="text-2xl font-bold">BotAssist</span>
                <span className="text-primary-400 text-sm font-semibold ml-1">WhatsApp</span>
              </div>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              A ferramenta definitiva para automatizar conversas no WhatsApp com IA inteligente. 
              Seguro, confiável e fácil de usar.
            </p>
            <div className="mb-6">
              <DonateButtons buttonsClassName="justify-start" />
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="h-10 w-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-bold text-lg mb-4 text-gray-100">
                {category}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    {link.href.startsWith('/') ? (
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 BotAssist. Desenvolvido por Irving Ruas —{' '}
              <a href="https://ruas.dev.br" className="text-primary-400 hover:text-primary-300">
                ruas.dev.br
              </a>
              {' '}•{' '}
              <a href="#report-issues" className="text-primary-400 hover:text-primary-300">
                Relate problemas
              </a>
            </div>
            <div className="flex items-center space-x-6">
              <div className="flex items-center text-gray-400 text-sm">
                <Globe className="h-4 w-4 mr-2" />
                Português (BR)
              </div>
              <div className="text-gray-400 text-sm">
                Versão do app: veja em Download
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mt-6 text-center text-gray-500 text-xs max-w-2xl mx-auto">
            BotAssist não é afiliado ao WhatsApp ou Meta. É uma ferramenta independente 
            que utiliza a API pública. Use com responsabilidade e em conformidade com os 
            Termos de Serviço do WhatsApp.
          </div>
        </div>
      </div>
    </footer>
  )
}
