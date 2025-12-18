
import { Card, CardContent } from "@/components/ui/card";
import { SectionWrapper } from "./section-wrapper";
import { cn } from "@/lib/utils";
import { Heart, Palette, HeartHandshake, BookOpen, Church } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

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

export default function BenefitsSection() {
    return (
        <SectionWrapper className="py-8">
             <div className="max-w-xl mx-auto">
                <Card className={cn("shadow-lg bg-card border-accent/20 rounded-2xl", "card-glow")}>
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
