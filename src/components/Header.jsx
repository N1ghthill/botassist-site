import { Menu, X, MessageSquare, Download } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Funcionalidades', href: '/#features' },
    { label: 'Como Funciona', href: '/#how-it-works' },
    { label: 'Screenshots', href: '/#screenshots' },
    { label: 'FAQ', href: '/#faq' },
    { label: 'Download', href: '/#download' },
  ]

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <MessageSquare className="h-8 w-8 text-primary-600" />
            <div>
              <span className="text-2xl font-bold text-gray-900">BotAssist</span>
              <span className="text-xs font-semibold text-primary-600 ml-1">WhatsApp</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-gray-700 hover:text-primary-700 font-medium transition-colors focus-ring rounded-md"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#download"
              className="inline-flex items-center px-4 py-2 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
            >
              <Download className="h-4 w-4 mr-2" />
              Download Gratuito
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 focus-ring"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-700 hover:text-primary-700 font-medium py-2 focus-ring rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/#download"
                className="inline-flex items-center justify-center px-4 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
                onClick={() => setIsMenuOpen(false)}
              >
                <Download className="h-4 w-4 mr-2" />
                Download Gratuito
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
