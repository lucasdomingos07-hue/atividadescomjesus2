
import { SectionWrapper } from "./section-wrapper";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Heart, BookOpen, Palette, HeartHandshake, Church } from "lucide-react";

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="items-center p-4">
              <div className="bg-card border-2 border-accent p-3 rounded-full mb-3 aspect-square flex items-center justify-center">
                <div className="text-2xl">{benefit.icon}</div>
              </div>
              <CardTitle className="font-headline text-lg">{benefit.title}</CardTitle>
              <CardDescription className="pt-1 text-sm">{benefit.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
