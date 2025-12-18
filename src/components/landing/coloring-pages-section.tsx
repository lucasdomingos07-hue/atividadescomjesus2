
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
import { cn } from "@/lib/utils";

const coloringPages = [
  PlaceHolderImages.find((img) => img.id === "coloring-page-1"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-2"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-6"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-7"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-8"),
].filter(Boolean);

export default function ColoringPagesSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);


  return (
    <SectionWrapper className="py-8 pb-0">
      <div className="text-center space-y-2 mb-4 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
          Atividades completas para<br />aprender sobre Jesus!
        </h2>
      </div>

      <div className="max-w-xl mx-auto">
        <Card className={cn("bg-card shadow-lg rounded-xl overflow-hidden border-primary/20", "card-glow")}>
          <CardContent className="p-1 md:p-2 relative">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {coloringPages.map((page, index) => (
                  page && (
                  <CarouselItem key={index}>
                    <div className="overflow-hidden rounded-lg">
                      <Image
                        src={page.imageUrl}
                        alt={page.description}
                        width={800}
                        height={800}
                        data-ai-hint={page.imageHint}
                        className="w-full h-auto object-contain aspect-[210/297]"
                      />
                    </div>
                  </CarouselItem>
                  )
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-4" />
              <CarouselNext className="hidden sm:flex -right-4" />
            </Carousel>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-2">
                    {Array.from({ length: count }).map((_, i) => (
                        <span
                            key={i}
                            className={cn(
                                'h-2 rounded-full transition-all duration-300',
                                i + 1 === current ? 'w-5 bg-background' : 'w-2 bg-background/50'
                            )}
                        />
                    ))}
                </div>
                <p className="text-center text-background/80 text-xs font-medium">
                  Arraste para o lado
                </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
