
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import BenefitsSection from '@/components/landing/benefits-section';
import WhatYouGetSection from '@/components/landing/what-you-get-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PricingSection from '@/components/landing/pricing-section';
import FaqSection from '@/components/landing/faq-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import ColoringPagesSection from '@/components/landing/coloring-pages-section';
import AudienceSection from '@/components/landing/audience-section';
import CreatorSection from '@/components/landing/creator-section';
import TargetAudienceSection from '@/components/landing/target-audience-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TargetAudienceSection />
        <AudienceSection />
        <ColoringPagesSection />
        <TestimonialsSection />
        <CreatorSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
