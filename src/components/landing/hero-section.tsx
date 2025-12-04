
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroSection() {

  return (
    <section className="pt-8 pb-4 sm:pt-12 bg-background">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center">
        
        {/* Text content */}
        <div className="flex flex-col space-y-6 text-center md:items-center">
          <div className="space-y-4 text-center">
            <h1 className="text-2xl md:text-3xl font-headline tracking-tight text-foreground leading-tight md:leading-snug text-glow">
              Ensine ao seu filho a palavra de<br />Deus de maneira encantadora!
            </h1>
            <h2 className="text-lg md:text-xl text-foreground max-w-3xl mx-auto">
              Assista ao vídeo de 1 minuto<br />e comece hoje mesmo!
            </h2>
          </div>
        </div>

        {/* Video */}
        <div className="w-full max-w-lg mt-8">
          <Card className={cn("overflow-hidden shadow-none rounded-2xl bg-transparent border-none md:shadow-none md:bg-transparent md:border-none relative", "card-glow")}>
             <div className="absolute -inset-4 bg-white/30 rounded-full blur-3xl opacity-50"></div>
            <CardContent className="p-0 relative">
               <div dangerouslySetInnerHTML={{ __html: `
                <script src="https://fast.wistia.com/player.js" async></script>
                <script src="https://fast.wistia.com/embed/ln87je4mr8.js" async type="module"></script>
                <style>
                  wistia-player[media-id='ln87je4mr8']:not(:defined) { 
                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/ln87je4mr8/swatch'); 
                    display: block; 
                    filter: blur(5px); 
                    padding-top:150.0%; 
                  }
                  wistia-player[media-id='ln87je4mr8'] {
                    border-radius: 1rem;
                    overflow: hidden;
                  }
                </style> 
                <wistia-player media-id="ln87je4mr8" aspect="0.6666666666666666"></wistia-player>
              ` }} />
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 w-full flex justify-center">
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
