
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
          <h1 className="text-2xl md:text-2xl tracking-tight text-center text-primary-foreground leading-tight font-headline">
            <span className="font-bold">Menos telas nas férias.</span> <br /> Mais fé, foco e imaginação <br /> antes que esse tempo passe.
          </h1>
          <h2 className="text-lg md:text-xl text-primary-foreground/80 mt-4 max-w-2xl text-center">
            <strong>Atividades bíblicas prontas para imprimir</strong> e criar momentos de fé entre mãe e filho.
          </h2>
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
                ACESSAR MATERIAL AGORA
              </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
