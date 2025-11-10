
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, BookOpen, Palette, HeartHandshake, Church } from "lucide-react";
import { cn } from "@/lib/utils";

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
    <SectionWrapper className="pt-4 pb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className={cn("shadow-lg hover:shadow-xl transition-shadow duration-300", 
            "lg:col-span-1",
            index === 3 && "sm:col-span-1 lg:col-span-1 xl:col-start-2",
            index === 4 && "sm:col-span-1 lg:col-span-1 xl:col-start-4"
          )}>
            <CardContent className="p-4 flex items-center gap-4">
              <div className="bg-card border-2 border-accent p-2 rounded-full aspect-square flex items-center justify-center shrink-0">
                {benefit.icon}
              </div>
              <div className="flex flex-col text-left">
                <h3 className="font-headline text-base font-semibold text-primary-foreground">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
