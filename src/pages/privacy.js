import Head from 'next/head'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Privacy() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://botassist.ruas.dev.br'
  const canonical = `${siteUrl.replace(/\/+$/, '')}/privacy`

  return (
    <>
      <Head>
        <title>Política de Privacidade — BotAssist</title>
        <meta name="description" content="Política de privacidade do site do BotAssist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={canonical} />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <main className="pt-28 pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Política de Privacidade</h1>

            <div className="prose prose-gray max-w-none">
              <p>
                Esta página descreve como o site do BotAssist lida com informações. Em resumo: não
                solicitamos cadastro e não pedimos dados pessoais para download.
              </p>

              <h2>Dados coletados</h2>
              <ul>
                <li>
                  <strong>Site:</strong> não coletamos dados pessoais intencionalmente por formulários.
                </li>
                <li>
                  <strong>Registros técnicos:</strong> como qualquer site, o provedor de hospedagem pode
                  registrar informações técnicas (ex.: IP, user-agent, data/hora) para segurança e
                  funcionamento.
                </li>
              </ul>

              <h2>Links externos</h2>
              <p>
                O site possui links para terceiros (ex.: GitHub). Ao acessar esses links, você estará
                sujeito às políticas desses serviços.
              </p>

              <h2>Contato</h2>
              <p>
                Se você tiver dúvidas sobre privacidade, use a seção “Relate problemas” na página
                inicial ou envie um e-mail para <a href="mailto:irving@ruas.dev.br">irving@ruas.dev.br</a>.
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  )
}

