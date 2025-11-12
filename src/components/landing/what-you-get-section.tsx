
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

const features = [
  { text: "<strong class=\"font-bold\">100 Atividades Bíblicas para Colorir</strong> — ensinam sobre Jesus enquanto desenvolvem criatividade e concentração." },
  { text: "<strong class=\"font-bold\">25 Histórias Bíblicas Infantis</strong> — leitura fácil e inspiradora, ideal pra momentos em família." },
  { text: "<strong class=\"font-bold\">Devocional Infantil</strong> — um guia para fortalecer a fé dos pequenos de forma lúdica e diária." },
  { text: "<strong class=\"font-bold\">Guia da Mãe de Fé</strong> — ideias práticas pra transformar o tempo livre em momentos espirituais com seus filhos." },
  { text: "<strong class=\"font-bold\">Calendário da Fé 2026</strong> — ensine seus filhos a planejar o dia com propósito, com atividades e versículos diários." },
];

export default function WhatYouGetSection() {
    const flatlayImage = PlaceHolderImages.find(img => img.id === "flatlay-drawings");
  return (
    <SectionWrapper className="bg-secondary pt-8 pb-8">
        <div className="max-w-xl mx-auto">
            <Card className={cn("shadow-lg bg-card border-accent/20 rounded-2xl", "card-glow")}>
                <CardContent className="p-6 md:p-8 flex flex-col items-center text-center gap-4">
                    <h2 className="text-xl font-headline font-bold text-card-foreground">
                        O Kit Colorindo Fé e Alegria, inclui:
                    </h2>
                    <ul className="space-y-4 text-left">
                        {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-4">
                            <CheckCircle2 className="w-8 h-8 text-accent-foreground mt-1 shrink-0" />
                            <span 
                            className="text-lg text-muted-foreground"
                            dangerouslySetInnerHTML={{ __html: feature.text }}
                            />
                        </li>
                        ))}
                    </ul>
                </CardContent>
                {flatlayImage && (
                    <CardContent className="p-0 overflow-hidden rounded-b-2xl">
                        <Image
                            src={flatlayImage.imageUrl}
                            alt={flatlayImage.description}
                            width={600}
                            height={400}
                            data-ai-hint={flatlayImage.imageHint}
                            className="w-full h-auto object-cover"
                        />
                    </CardContent>
                )}
            </Card>
        </div>
    </SectionWrapper>
  );
}
