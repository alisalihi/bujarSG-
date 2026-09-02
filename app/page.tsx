import { HeroSection } from '@/components/hero-section'
import { ServicesOverview } from '@/components/services-overview'
import { HowItWorks } from '@/components/how-it-works'
import { WhyChooseUs } from '@/components/why-choose-us'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <CTASection />
    </main>
  )
}
