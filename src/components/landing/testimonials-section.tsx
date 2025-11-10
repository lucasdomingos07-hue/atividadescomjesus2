
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import React from "react";

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
  return (
    <SectionWrapper className="py-8">
      <div className="text-center space-y-2 mb-6">
        <h2 className="text-xl font-headline font-bold text-headline">
          O que as famílias estão dizendo:
        </h2>
      </div>

      <div className="max-w-xl mx-auto grid grid-cols-1 gap-6">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card/90 shadow-lg rounded-xl overflow-hidden border border-primary/20 h-full">
            <CardContent className="p-6 flex flex-col items-center text-center gap-2">
              {testimonial.image && (
                <Image
                  src={testimonial.image.imageUrl}
                  alt={testimonial.image.description}
                  width={100}
                  height={100}
                  data-ai-hint={testimonial.image.imageHint}
                  className="rounded-full w-24 h-24 object-cover border-4 border-white shadow-md"
                />
              )}
              <div className="flex flex-col mt-2">
                <p className="font-headline font-bold text-lg text-primary-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
              <div className="flex text-yellow-400 my-1">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5" />
                ))}
              </div>
              <p className="italic text-base text-muted-foreground flex-grow">“{testimonial.quote}”</p>
              {testimonial.testimonialImage && (
                  <div className="mt-4">
                      <Image
                          src={testimonial.testimonialImage.imageUrl}
                          alt={testimonial.testimonialImage.description}
                          width={200}
                          height={200}
                          data-ai-hint={testimonial.testimonialImage.imageHint}
                          className="rounded-lg shadow-md"
                      />
                  </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
