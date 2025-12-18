
import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function FinalCtaSection() {
  return (
    <SectionWrapper className="bg-background text-center text-accent-foreground">
      <div className="relative z-10 flex flex-col items-center gap-6">
        <h2 className="text-xl font-headline font-bold text-primary">
          Plante a fé no coração dos seus filhos desde cedo.
        </h2>
        <p className="text-lg md:text-xl max-w-3xl text-primary/80">
          Em poucos minutos, você já pode imprimir e viver momentos de amor e aprendizado em família — do jeitinho que Deus sonhou.
        </p>
        <a href="#pricing">
          <Button size="lg" className={cn("cta-glow-accent text-lg font-bold h-16 px-12 mt-4 rounded-full shine-effect")}>
            ✨ QUERO ENSINAR COM FÉ
          </Button>
        </a>
      </div>
    </SectionWrapper>
  );
}
