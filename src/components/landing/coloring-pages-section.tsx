
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
import { Separator } from "../ui/separator";
import { Heart, Palette, HeartHandshake, BookOpen, Church, ClipboardCheck } from "lucide-react";


const coloringPages = [
  PlaceHolderImages.find((img) => img.id === "coloring-page-1"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-2"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-6"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-7"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-8"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-9"),
  PlaceHolderImages.find((img) => img.id === "coloring-page-10"),
].filter(Boolean);

const benefits = [
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: "Fortalece a fé",
      description: "Ensina valores cristãos com leveza.",
    },
    {
      icon: <Palette className="w-8 h-8 text-blue-500" />,
      title: "Ativa criatividade",
      description: "Brincar enquanto aprende.",
    },
    {
      icon: <HeartHandshake className="w-8 h-8 text-pink-500" />,
      title: "Conecta pais e filhos",
      description: "Momentos que viram memórias.",
    },
    {
      icon: <BookOpen className="w-8 h-8 text-green-500" />,
      title: "Histórias que tocam",
      description: "Aproximam o coração de Deus.",
    },
    {
      icon: <Church className="w-8 h-8 text-purple-500" />,
      title: "Fé dentro de casa",
      description: "Um pequeno ministério no lar.",
    },
    {
      icon: <ClipboardCheck className="w-8 h-8 text-orange-500" />,
      title: "Criado de mãe para mãe",
      description: "Pensado para a realidade das férias, do tempo curto e das distrações.",
    },
  ];

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
    <SectionWrapper className="py-8">
      <div className="text-center space-y-2 mb-4 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
          Atividades completas para<br />aprender sobre Jesus!
        </h2>
      </div>

       <div className="mb-4 flex flex-col items-center justify-center gap-1">
          <div className="flex items-center gap-2">
              {Array.from({ length: count }).map((_, i) => (
                  <span
                      key={i}
                      className={cn(
                          'h-2 rounded-full transition-all duration-300',
                          i + 1 === current ? 'w-5 bg-brand-green' : 'w-2 bg-brand-green/50'
                      )}
                  />
              ))}
          </div>
          <p className="text-center text-white/80 text-xs font-medium">
            Arraste para o lado
          </p>
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
          </CardContent>
          <Separator />
          <CardContent className="p-6">
            <div className="flex flex-col gap-4">
              {benefits.map((benefit, index) => (
                <React.Fragment key={index}>
                  <div className="flex items-center gap-4">
                    <div className="bg-card border-2 border-accent p-2 rounded-full aspect-square flex items-center justify-center shrink-0">
                      {benefit.icon}
                    </div>
                    <div className="flex flex-col text-left">
                      <h3 className="font-headline text-base font-semibold text-card-foreground">{benefit.title}</h3>
                      <p className="text-sm text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                  {index < benefits.length - 1 && <Separator className="bg-border/50" />}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  );
}
