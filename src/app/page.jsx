import Hero from '@/components/Hero'
import Carousel from '@/components/Carousel'
import YoutubeEmbed from '@/components/YoutubeEmbed'
import TechStack from '@/components/TechStack'
import CaseStudy from '@/components/CaseStudy'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32 py-16">
        <Carousel />
        <YoutubeEmbed />
        <TechStack />
        <CaseStudy />
        <FAQ />
      </div>
      <Footer />
    </>
  )
}
