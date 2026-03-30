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
import { fetchLatestReleaseMeta, RELEASE_META_REVALIDATE_SECONDS } from '../lib/appRelease'

export default function Home({ releaseMeta }) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://botassist.ruas.dev.br'
  const socialImage = `${siteUrl.replace(/\/+$/, '')}/botassist_logo.png`
  const description =
    'Desktop local-first para WhatsApp com IA, pensado para atendimento inicial, triagem e operacao assistida com perfis, politicas e tools sob controle.'

  return (
    <>
      <Head>
        <title>BotAssist - Desktop local-first para operar WhatsApp com IA</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
        <link rel="canonical" href={siteUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="BotAssist - Desktop local-first para operar WhatsApp com IA" />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:image" content={socialImage} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="BotAssist - Desktop local-first para operar WhatsApp com IA" />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={socialImage} />
      </Head>
      
      <div className="min-h-screen bg-white bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(63,132,89,0.18),transparent),radial-gradient(900px_500px_at_90%_0%,rgba(54,72,214,0.12),transparent)]">
        <Header />
        <main>
          <Hero releaseMeta={releaseMeta} />
          <ReleaseHighlights releaseMeta={releaseMeta} />
          <Features />
          <UseCases />
          <HowItWorks />
          <Screenshots />
          <FAQ />
          <Download releaseMeta={releaseMeta} />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      releaseMeta: await fetchLatestReleaseMeta(),
    },
    revalidate: RELEASE_META_REVALIDATE_SECONDS,
  }
}
