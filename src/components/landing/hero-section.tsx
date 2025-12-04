
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function HeroSection() {

  return (
    <section className="relative pb-4 bg-background">
      <div className="bg-brand-green">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center relative z-10 pt-10">
          <h1 className="text-2xl md:text-3xl font-headline font-bold tracking-tight text-center text-primary-foreground mb-6">
            Ensine ao seu filhoa palavra<br />
            de Deus de forma divertida!
          </h1>
        </div>
      </div>
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center relative z-10">

        {/* Video */}
        <div className="w-full max-w-lg -mt-16">
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
        <div className="mt-8 mb-0 w-full flex justify-center">
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
