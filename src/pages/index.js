import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Features from '../components/Features'
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
        <meta name="description" content="BotAssist conecta seu WhatsApp à Groq AI com interface gráfica. Modo anti-ban, segurança e fácil configuração." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BotAssist - Automatize conversas no WhatsApp com IA" />
        <meta property="og:description" content="BotAssist conecta seu WhatsApp à Groq AI com interface gráfica. Modo anti-ban, segurança e fácil configuração." />
        <meta property="og:url" content={siteUrl} />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Header />
        <main>
          <Hero />
          <Features />
          <HowItWorks />
          <Screenshots />
          <Testimonials />
          <FAQ />
          <Download />
        </main>
        <Footer />
      </div>
    </>
  )
}
