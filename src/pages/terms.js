import Head from 'next/head'
import Link from 'next/link'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Terms() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://botassist.ruas.dev.br'
  const canonical = `${siteUrl.replace(/\/+$/, '')}/terms`

  return (
    <>
      <Head>
        <title>Termos de Uso — BotAssist</title>
        <meta name="description" content="Termos de uso do site do BotAssist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-8">
              <Link
                href="/"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors focus-ring"
              >
                Voltar ao início
              </Link>
              <Link
                href="/#download"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-primary-600 text-white font-semibold hover:bg-primary-700 transition-colors focus-ring"
              >
                Download
              </Link>
              <Link
                href="/#report-issues"
                className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors focus-ring"
              >
                Relatar problema
              </Link>
            </div>

            <h1 className="text-4xl font-bold text-gray-900">Termos de Uso</h1>

            <div className="legal-prose mt-6">
              <p>
                O BotAssist é disponibilizado gratuitamente e “como está”. Ao usar o site e baixar o
                aplicativo, você concorda com os termos abaixo.
              </p>

              <h2>Uso responsável</h2>
              <ul>
                <li>Você é responsável por como usa o BotAssist e por cumprir regras/termos de terceiros.</li>
                <li>O BotAssist não é afiliado ao WhatsApp/Meta.</li>
              </ul>

              <h2>Sem garantias</h2>
              <ul>
                <li>Não garantimos funcionamento em todos os ambientes, sistemas ou configurações.</li>
                <li>Não há obrigação de suporte individual, correções imediatas ou atendimento 24/7.</li>
              </ul>

              <h2>Relatos de problemas</h2>
              <p>
                Se encontrar bugs, prefira abrir uma issue no GitHub com passos para reproduzir e logs/prints
                (removendo dados sensíveis quando necessário). Você pode ir direto pela seção{' '}
                <Link href="/#report-issues">Relate problemas</Link>.
              </p>

              <h2>Contato</h2>
              <p>
                Para questões sensíveis, envie um e-mail para <a href="mailto:irving@ruas.dev.br">irving@ruas.dev.br</a>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}
