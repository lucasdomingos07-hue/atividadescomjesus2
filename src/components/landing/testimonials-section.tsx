"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Users } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const testimonials = [
  {
    name: "Camila S.",
    role: "mãe da Maria, 6 anos",
    quote: "Ver minha filha de 6 anos colorindo e fazendo perguntas sobre Jesus aquece meu coração. É incrível como o material despertou a fé nela de um jeito tão puro e natural. Recomendo demais!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-1"),
    testimonialImage: PlaceHolderImages.find(img => img.id === "testimonial-camila-image"),
  },
  {
    name: "Paula F.",
    role: "Professora de Catequese",
    quote: "Esse material transformou minhas aulas de catequese! As crianças ficam super envolvidas, aprendendo sobre a Palavra de Deus com alegria e criatividade. É uma bênção!",
    image: PlaceHolderImages.find(img => img.id === "testimonial-2"),
    testimonialImage: PlaceHolderImages.find(img => img.id === "testimonial-paula-image"),
  },
  {
    name: "Família Oliveira",
    role: "Pais de 3 crianças",
    quote: "Finalmente encontramos algo que une diversão e fé! Nossos filhos pedem para colorir todos os dias.",
    image: PlaceHolderImages.find(img => img.id === "testimonial-3"),
    testimonialImage: PlaceHolderImages.find(img => img.id === "testimonial-familia-image"),
  },
];

const StarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </svg>
);

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 2500, stopOnInteraction: true })
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
    <SectionWrapper className="pt-4 pb-4">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-xl font-headline font-bold text-foreground">
          O que as famílias<br />estão dizendo:
        </h2>
      </div>

      <div className="max-w-xl mx-auto">
        <Card className={cn("bg-card shadow-lg rounded-xl overflow-hidden border-primary/20", "card-glow")}>
          <CardContent className="p-4 bg-white">
            <div className={cn("flex items-center justify-center text-center gap-3 w-full")}>
                <Users className="w-6 h-6 text-background shrink-0"/>
                <span className="font-medium text-left text-sm leading-tight text-background">
                  <strong>+ de 5 mil</strong> famílias já transformaram o tempo de tela em diversão e aprendizado.
                </span>
            </div>
          </CardContent>
          <Separator className="bg-border/50" />
          <CardContent className="p-6 pt-8 relative pb-12">
            <Carousel
              setApi={setApi}
              plugins={[plugin.current]}
              className="w-full"
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
            >
              <CarouselContent>
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col items-center text-center gap-2">
                      {testimonial.image && (
                        <div className="relative w-24 h-24">
                          <Image
                            src={testimonial.image.imageUrl}
                            alt={testimonial.image.description}
                            width={100}
                            height={100}
                            data-ai-hint={testimonial.image.imageHint}
                            className="rounded-full w-24 h-24 object-cover border-4 border-background shadow-md"
                          />
                           <div className="absolute inset-0 rounded-full border-2 border-background ring-2 ring-background/50 animate-pulse"></div>
                        </div>
                      )}
                      <div className="flex flex-col mt-2">
                        <p className="font-headline font-bold text-lg text-card-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                      <div className="flex text-yellow-400 my-1">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon key={i} className="w-5 h-5" />
                        ))}
                      </div>
                      <p className="italic text-base text-muted-foreground flex-grow">“{testimonial.quote}”</p>
                      {testimonial.testimonialImage && (
                          <div className={cn("mt-4", "card-glow")}>
                              <Image
                                  src={testimonial.testimonialImage.imageUrl}
                                  alt={testimonial.testimonialImage.description}
                                  width={200}
                                  height={200}
                                  data-ai-hint={testimonial.testimonialImage.imageHint}
                                  className="shadow-md"
                              />
                          </div>
                      )}
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="hidden sm:flex -left-10" />
              <CarouselNext className="hidden sm:flex -right-10" />
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
