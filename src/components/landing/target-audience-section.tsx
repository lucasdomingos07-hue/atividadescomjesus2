
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Gift, BookOpen, Users, Milestone, Leaf, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const points = [
  "📱 Seu filho vive grudado nas telas",
  "🏠 A família quase não se conecta mais",
  "⚖️ Fica difícil ensinar o que é certo",
  "🧠 Você nota que ele tem mais dificuldade de se concentrar",
  "💔 E teme que cresça sem fé e valores",
];

const audience = [
    { text: "Pais que buscam momentos de qualidade com os filhos", icon: <Users className="w-full h-full text-pink-500" /> },
    { text: "Familiares que querem presentear com propósito", icon: <Gift className="w-full h-full text-red-500" /> },
    { text: "Professores e catequistas que precisam de materiais criativos", icon: <BookOpen className="w-full h-full text-green-500" /> },
    { text: "Líderes infantis que desejam engajar com a Palavra", icon: <Sparkles className="w-full h-full text-blue-500" /> },
    { text: "Quem quer plantar fé nas próximas gerações", icon: <Leaf className="w-full h-full text-purple-500" /> },
];

export default function TargetAudienceSection() {
    const audienceImage = PlaceHolderImages.find(img => img.id === "audience-section-image");
    return (
        <SectionWrapper className="py-8 pb-4">
            <div className="max-w-xl mx-auto">
                <Card className={cn("shadow-lg bg-card border-accent/20 rounded-2xl", "card-glow")}>
                    <CardContent className="p-6 md:p-8 flex flex-col items-center text-center gap-4">
                        <h2 className="text-xl font-headline font-bold text-card-foreground">
                            Se você sente que:
                        </h2>
                        <ul className="text-left text-lg text-muted-foreground space-y-3 w-full">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <span className="text-2xl mt-1">
                                        {point.split(' ')[0]}
                                    </span>
                                    <span>{point.substring(point.indexOf(' ') + 1)}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-headline font-bold text-card-foreground mt-2">
                            Então esse kit foi criado<br />exatamente para você!
                        </p>
                    </CardContent>
                    <CardContent className="p-6 pt-0">
                         <div className="text-left text-lg text-muted-foreground space-y-3 w-full">
                        {audience.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className={cn("w-10 h-10 flex items-center justify-center shrink-0 p-1.5 mt-0.5",
                                "bg-accent/10 border border-accent/20 rounded-full"
                              )}>
                                {item.icon}
                              </div>
                              <span>{item.text}</span>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                    {audienceImage && (
                        <CardContent className="p-0">
                            <Image
                                src={audienceImage.imageUrl}
                                alt={audienceImage.description}
                                width={1024}
                                height={576}
                                data-ai-hint={audienceImage.imageHint}
                                className="w-full h-auto object-cover rounded-b-2xl"
                            />
                        </CardContent>
                    )}
                </Card>
            </div>
        </SectionWrapper>
    );
}
