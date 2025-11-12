
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
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { SectionWrapper } from '@/components/landing/section-wrapper';
import { cn } from '@/lib/utils';

function MovedImage() {
  const flatlayImage = PlaceHolderImages.find(img => img.id === "flatlay-drawings");
  if (!flatlayImage) return null;
  return (
     <SectionWrapper className="pt-8 pb-4">
      <div className="flex justify-center">
        <Card className={cn("overflow-hidden shadow-lg rounded-2xl w-full max-w-md", "card-glow")}>
            <CardContent className="p-0">
                <Image
                    src={flatlayImage.imageUrl}
                    alt={flatlayImage.description}
                    width={600}
                    height={400}
                    data-ai-hint={flatlayImage.imageHint}
                    className="w-full h-auto object-cover"
                />
            </CardContent>
        </Card>
    </div>
    </SectionWrapper>
  )
}

function AudienceTopImage() {
  const audienceImage = PlaceHolderImages.find(img => img.id === "audience-section-image");
  if (!audienceImage) return null;
  return (
     <SectionWrapper className="pt-4 pb-4">
      <div className="flex justify-center">
        <Card className={cn("overflow-hidden shadow-lg rounded-2xl w-full max-w-xl", "card-glow")}>
            <CardContent className="p-0">
                <Image
                    src={audienceImage.imageUrl}
                    alt={audienceImage.description}
                    width={1024}
                    height={576}
                    data-ai-hint={audienceImage.imageHint}
                    className="w-full h-auto object-cover"
                />
            </CardContent>
        </Card>
    </div>
    </SectionWrapper>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <TargetAudienceSection />
        <ColoringPagesSection />
        <AudienceTopImage />
        <AudienceSection />
        <TestimonialsSection />
        <CreatorSection />
        <BenefitsSection />
        <WhatYouGetSection />
        <MovedImage />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
