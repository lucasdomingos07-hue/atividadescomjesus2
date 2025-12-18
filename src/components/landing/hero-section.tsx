
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="relative pb-4 bg-background">
      <div className="bg-brand-green pt-8 pb-56 md:pb-64">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center relative z-10">
          <h1 className="text-3xl md:text-4xl tracking-tight text-center text-primary-foreground leading-tight">
            Ensine ao seu filho<br />
            <strong>a</strong> <strong>palavra de Deus</strong><br />
            de forma divertida!
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center relative z-10 -mt-48 md:-mt-56">

        {/* Image */}
        <div className="w-full max-w-lg">
          <Card className={cn("overflow-hidden shadow-2xl rounded-2xl bg-card border")}>
            <CardContent className="p-0 relative">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={heroImage.imageHint}
                  className="w-full h-auto object-contain"
                  priority
                />
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="mt-6 mb-0 w-full flex justify-center">
          <a href="#pricing" className="w-full max-w-md md:max-w-none md:w-auto">
              <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 rounded-full shine-effect w-full md:w-auto text-primary-foreground")}>
                QUERO COMEÇAR HOJE
              </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
