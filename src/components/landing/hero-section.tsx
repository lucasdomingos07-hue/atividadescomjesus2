
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  const heroImage = PlaceHolderImages.find(img => img.id === "hero-family-coloring");

  return (
    <section className="pt-8 pb-4 sm:pt-12 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Text content */}
        <div className="flex flex-col space-y-6 text-center md:items-center">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl md:text-3xl font-headline tracking-tight text-foreground text-[26px] leading-tight md:leading-snug text-glow">
              <strong>ATENÇÃO:</strong> As telas estão<br />
              <strong>destruindo o desenvolvimento</strong><br />
              dos seus filhos!
            </h1>
            <h2 className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              Nessas férias, desperte o foco, a curiosidade e a fé que as telas estavam apagando.<br/><strong>+100 atividades bíblicas prontas para imprimir e colorir com eles 🎨</strong>
            </h2>
          </div>
        </div>

        {/* Image */}
        <div className="w-full max-w-lg mt-8">
          <Card className={cn("overflow-visible shadow-none rounded-2xl bg-transparent border-none md:shadow-none md:bg-transparent md:border-none relative", "card-glow")}>
            <div className="absolute -inset-4 bg-white/30 rounded-full blur-3xl opacity-50"></div>
            <CardContent className="p-0 relative">
              {heroImage && (
                <Image
                  src={heroImage.imageUrl}
                  alt={heroImage.description}
                  width={1200}
                  height={800}
                  data-ai-hint={heroImage.imageHint}
                  className="w-full h-auto object-contain rounded-2xl"
                  priority
                />
              )}
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 w-full flex justify-center">
          <a href="#pricing" className="w-full max-w-md md:max-w-none md:w-auto">
              <Button size="lg" className={cn("cta-glow text-lg font-bold h-14 px-10 rounded-full shine-effect w-full md:w-auto text-primary-foreground")}>
                QUERO COMEÇAR AINDA HOJE
              </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
