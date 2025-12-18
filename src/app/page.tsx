
import Footer from '@/components/landing/footer';
import HeroSection from '@/components/landing/hero-section';
import WhatYouGetSection from '@/components/landing/what-you-get-section';
import TestimonialsSection from '@/components/landing/testimonials-section';
import PricingSection from '@/components/landing/pricing-section';
import FaqSection from '@/components/landing/faq-section';
import FinalCtaSection from '@/components/landing/final-cta-section';
import ColoringPagesSection from '@/components/landing/coloring-pages-section';
import CreatorSection from '@/components/landing/creator-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <main className="flex-1">
        <HeroSection />
        <ColoringPagesSection />
        <TestimonialsSection />
        <CreatorSection />
        <WhatYouGetSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
