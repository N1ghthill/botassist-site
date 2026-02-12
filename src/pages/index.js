import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ReleaseHighlights from '../components/ReleaseHighlights'
import Features from '../components/Features'
import UseCases from '../components/UseCases'
import HowItWorks from '../components/HowItWorks'
import Screenshots from '../components/Screenshots'
import Testimonials from '../components/Testimonials'
import FAQ from '../components/FAQ'
import Download from '../components/Download'  // ← SEM chaves!
import Footer from '../components/Footer'

export default function Home() {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://botassist.ruas.dev.br'

  return (
    <>
      <Head>
        <title>BotAssist - Automatize conversas no WhatsApp com IA</title>
        <meta name="description" content="BotAssist conecta seu WhatsApp à Groq AI com interface gráfica, tools poderosas e agentes personalizáveis. Setup guiado e grátis para Windows, macOS e Linux." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BotAssist - Automatize conversas no WhatsApp com IA" />
        <meta property="og:description" content="BotAssist conecta seu WhatsApp à Groq AI com interface gráfica, tools poderosas e agentes personalizáveis. Setup guiado e grátis para Windows, macOS e Linux." />
        <meta property="og:url" content={siteUrl} />
      </Head>
      
      <div className="min-h-screen bg-white bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(63,132,89,0.18),transparent),radial-gradient(900px_500px_at_90%_0%,rgba(54,72,214,0.12),transparent)]">
        <Header />
        <main>
          <Hero />
          <ReleaseHighlights />
          <Features />
          <UseCases />
          <HowItWorks />
          <Screenshots />
          <FAQ />
          <Download />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  )
}
