
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Heart, Gift, BookOpen, Users, Milestone } from "lucide-react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

const points = [
  "As telas estão tomando tempo demais das crianças",
  "Os momentos em família estão ficando raros",
  "Ensinar valores está mais difícil do que deveria",
  "E você queria algo simples para viver mais fé no dia a dia",
];

const audience = [
    { text: "Mães e Pais que buscam momentos de qualidade e ensino com seus filhos.", icon: <Heart className="w-full h-full text-pink-500" /> },
    { text: "Avós, Tios e Padrinhos que desejam presentear com algo que edifica e diverte.", icon: <Gift className="w-full h-full text-red-500" /> },
    { text: "Professores de Escola Dominical e Catequistas que precisam de materiais criativos.", icon: <BookOpen className="w-full h-full text-green-500" /> },
    { text: "Líderes de Ministério Infantil que querem engajar as crianças com a Palavra.", icon: <Users className="w-full h-full text-blue-500" /> },
    { text: "Qualquer pessoa que queira plantar sementes de fé nas futuras gerações.", icon: <Milestone className="w-full h-full text-purple-500" /> },
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
                        <ul className="text-left text-lg text-muted-foreground space-y-3">
                            {points.map((point, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <Check className="w-6 h-6 text-accent-foreground mt-1 shrink-0" />
                                    <span>{point}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="text-xl font-headline font-bold text-card-foreground mt-2">
                            Então esse kit foi criado<br />exatamente para você:
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
