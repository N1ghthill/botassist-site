import { Coffee, Copy, HeartHandshake, QrCode } from 'lucide-react'
import { useMemo, useState } from 'react'

export default function DonateButtons({ className = '', buttonsClassName = '' }) {
  const sponsorsUrl = 'https://github.com/sponsors/N1ghthill'
  const pixKey = process.env.NEXT_PUBLIC_PIX_KEY || ''
  const pixLabel = process.env.NEXT_PUBLIC_PIX_LABEL || 'Pix'
  const pixCopyText = useMemo(() => pixKey.replace(/\s+/g, ' ').trim(), [pixKey])
  const [isPixOpen, setIsPixOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  async function copyPix() {
    if (!pixCopyText) return
    try {
      await navigator.clipboard.writeText(pixCopyText)
      setCopied(true)
      setCopyError(false)
      window.setTimeout(() => setCopied(false), 1500)
    } catch {
      setCopied(false)
      setCopyError(true)
    }
  }

  return (
    <div className={className}>
      <div className={`flex flex-col sm:flex-row gap-3 justify-center ${buttonsClassName}`}>
        <a
          href={sponsorsUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors"
        >
          <Coffee className="h-5 w-5 mr-2" />
          Pagar um cafezinho
        </a>

        {pixCopyText ? (
          <>
            <button
              type="button"
              onClick={() => setIsPixOpen(true)}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors"
            >
              <QrCode className="h-5 w-5 mr-2" />
              Pix
            </button>

            {isPixOpen && (
              <div
                className="fixed inset-0 z-50 bg-black/60 p-4 flex items-center justify-center"
                role="dialog"
                aria-modal="true"
                aria-label="Doação via Pix"
                onClick={() => setIsPixOpen(false)}
              >
                <div
                  className="w-full max-w-lg bg-white rounded-2xl p-6 shadow-2xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Pix</h3>
                      <p className="text-gray-600 text-sm mt-1">
                        {pixLabel}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => setIsPixOpen(false)}
                      className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800"
                    >
                      Fechar
                    </button>
                  </div>

                  <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                    <div className="text-xs text-gray-500 mb-2">Chave Pix</div>
                    <div className="font-mono text-sm text-gray-900 break-all">
                      {pixCopyText}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <button
                      type="button"
                      onClick={copyPix}
                      className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors"
                    >
                      <Copy className="h-5 w-5 mr-2" />
                      {copied ? 'Copiado!' : 'Copiar chave'}
                    </button>
                    {copyError ? (
                      <div className="text-sm text-gray-600 sm:self-center">
                        Se não copiar automaticamente, selecione e copie a chave manualmente.
                      </div>
                    ) : null}
                    <a
                      href={sponsorsUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-gray-900 text-white font-semibold hover:bg-black transition-colors"
                    >
                      <HeartHandshake className="h-5 w-5 mr-2" />
                      Outras formas (GitHub)
                    </a>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : null}
      </div>
    </div>
  )
}
