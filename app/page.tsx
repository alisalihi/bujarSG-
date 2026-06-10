import { HeroSection } from '@/components/hero-section'
import { ServicesOverview } from '@/components/services-overview'
import { HowItWorks } from '@/components/how-it-works'
import { WhyChooseUs } from '@/components/why-choose-us'
import { TestimonialsSection } from '@/components/testimonial-card'
import { StatisticsSection } from '@/components/statistics-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <ServicesOverview />
      <HowItWorks />
      <WhyChooseUs />
      <TestimonialsSection />
      <StatisticsSection dark />
      <CTASection />
    </main>
  )
}
