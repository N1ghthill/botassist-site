import { Coffee, Copy, HeartHandshake, QrCode } from 'lucide-react'
import { useEffect, useMemo, useState } from 'react'

export default function DonateButtons({
  className = '',
  buttonsClassName = '',
  theme = 'light',
  size = 'md',
  layout = 'responsive'
}) {
  const sponsorsUrl = 'https://github.com/sponsors/N1ghthill'
  const pixKey = process.env.NEXT_PUBLIC_PIX_KEY || ''
  const pixLabel = process.env.NEXT_PUBLIC_PIX_LABEL || 'Pix'
  const pixCopyText = useMemo(() => pixKey.replace(/\s+/g, ' ').trim(), [pixKey])
  const [isPixOpen, setIsPixOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const [copyError, setCopyError] = useState(false)

  const isDark = theme === 'dark'
  const isSmall = size === 'sm'

  const baseButton =
    'inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-ring disabled:opacity-60 disabled:pointer-events-none'
  const sizeClasses = isSmall ? 'px-4 py-2.5 text-sm' : 'px-6 py-3'
  const focusOffset = isDark ? 'focus-visible:ring-offset-gray-900' : ''

  const sponsorsClasses = isDark
    ? 'bg-primary-500 text-white hover:bg-primary-400'
    : 'bg-gray-900 text-white hover:bg-black'

  const pixButtonClasses = isDark
    ? 'bg-gray-800 text-white border border-gray-700 hover:bg-gray-700'
    : 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-50'

  const layoutClass =
    layout === 'stack'
      ? 'flex flex-col'
      : layout === 'inline'
        ? 'flex flex-row flex-wrap'
        : 'flex flex-col sm:flex-row'

  useEffect(() => {
    if (!isPixOpen) return

    function onKeyDown(event) {
      if (event.key === 'Escape') setIsPixOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [isPixOpen])

  async function copyToClipboard(text) {
    if (!text) return false

    if (navigator?.clipboard?.writeText) {
      await navigator.clipboard.writeText(text)
      return true
    }

    const textarea = document.createElement('textarea')
    textarea.value = text
    textarea.setAttribute('readonly', '')
    textarea.style.position = 'fixed'
    textarea.style.opacity = '0'
    document.body.appendChild(textarea)
    textarea.select()
    const ok = document.execCommand('copy')
    document.body.removeChild(textarea)
    return ok
  }

  async function copyPix() {
    if (!pixCopyText) return
    try {
      const ok = await copyToClipboard(pixCopyText)
      if (!ok) throw new Error('copy_failed')
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
      <div className={`${layoutClass} gap-3 justify-center ${buttonsClassName}`}>
        <a
          href={sponsorsUrl}
          target="_blank"
          rel="noreferrer"
          className={`${baseButton} ${sizeClasses} ${focusOffset} ${sponsorsClasses}`}
        >
          <Coffee className="h-5 w-5 mr-2" />
          Doar no GitHub
        </a>

        {pixCopyText ? (
          <>
            <button
              type="button"
              onClick={() => setIsPixOpen(true)}
              className={`${baseButton} ${sizeClasses} ${focusOffset} ${pixButtonClasses}`}
            >
              <QrCode className="h-5 w-5 mr-2" />
              Doar via Pix
            </button>

            {isPixOpen && (
              <div
                className="fixed inset-0 z-[60] bg-black/60 p-4 flex items-center justify-center"
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
                      className="px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors text-gray-800 focus-ring"
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
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
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
                      className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-black transition-colors focus-ring"
                    >
                      <HeartHandshake className="h-5 w-5 mr-2" />
                      Abrir GitHub Sponsors
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
