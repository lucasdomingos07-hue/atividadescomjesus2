
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "./section-wrapper";
import { cn } from "@/lib/utils";
import { Heart, BookOpen, Palette, HeartHandshake, Church } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import React from "react";

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
];


export default function CreatorSection() {
    const creatorImage = PlaceHolderImages.find(img => img.id === "creator-monica-2");

    return (
        <SectionWrapper className="py-4">
            <div className="text-center space-y-4 mb-6 max-w-2xl mx-auto">
                <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
                    Conheça a criadora<br />das Atividades 📚
                </h2>
            </div>
            <div className="max-w-xl mx-auto">
                <Card className={cn("shadow-lg bg-card border-accent/20 rounded-2xl p-6 md:p-8", "card-glow")}>
                    <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                        {creatorImage && (
                            <div className="relative">
                                <Image
                                    src={creatorImage.imageUrl}
                                    alt={creatorImage.description}
                                    width={140}
                                    height={140}
                                    data-ai-hint={creatorImage.imageHint}
                                    className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-4 border-white shadow-md"
                                />
                                <div className="absolute inset-0 rounded-full border-4 border-brand-green ring-4 ring-brand-green/50 animate-pulse"></div>
                            </div>
                        )}
                        <div className="flex flex-col items-center gap-1">
                            <p className="font-semibold text-primary-foreground text-lg">- Mônica Alencar</p>
                            <p className="text-sm text-muted-foreground">Psicóloga há 12 anos</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            "Como mãe e psicóloga infantil cristã, vi muitas famílias perdendo momentos preciosos por causa das telas. Criei o Colorindo Fé e Alegria para ajudar pais a ensinarem valores e fortalecerem a fé — de um jeito simples, leve e cheio de amor. Que abençoe o seu lar tanto quanto abençoou o meu ❤️"
                        </p>
                    </CardContent>

                    <Separator className="my-6 bg-border/50" />

                    <CardContent className="p-0">
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
