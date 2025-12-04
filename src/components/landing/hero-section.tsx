
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroSection() {

  return (
    <section className="bg-background relative">
      <div className="absolute top-0 left-0 right-0 h-80 bg-brand-green"></div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center pt-12 pb-8 relative z-10">
        
        <h1 className="text-3xl md:text-4xl font-headline font-bold text-center text-background mb-8">
          Ensine ao seu filho a palavra<br />
          de Deus de forma divertida!
        </h1>

        {/* Video */}
        <div className="w-full max-w-lg">
          <Card className={cn("overflow-hidden shadow-none bg-transparent border-none")}>
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
                    overflow: hidden;
                  }
                </style> 
                <wistia-player media-id="ln87je4mr8" aspect="0.6666666666666666"></wistia-player>
              ` }} />
            </CardContent>
          </Card>
        </div>
        
        {/* CTA Button */}
        <div className="mt-8 mb-4 w-full flex justify-center">
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
