
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Gift, BookOpen, Users, Milestone } from "lucide-react";
import { cn } from "@/lib/utils";

const audience = [
  { text: "Mães e Pais que buscam momentos de qualidade e ensino com seus filhos.", icon: <Heart className="w-full h-full text-pink-500" /> },
  { text: "Avós, Tios e Padrinhos que desejam presentear com algo que edifica e diverte.", icon: <Gift className="w-full h-full text-red-500" /> },
  { text: "Professores de Escola Dominical e Catequistas que precisam de materiais criativos.", icon: <BookOpen className="w-full h-full text-green-500" /> },
  { text: "Líderes de Ministério Infantil que querem engajar as crianças com a Palavra.", icon: <Users className="w-full h-full text-blue-500" /> },
  { text: "Qualquer pessoa que queira plantar sementes de fé nas futuras gerações.", icon: <Milestone className="w-full h-full text-purple-500" /> },
];

export default function AudienceSection() {
    return (
        <SectionWrapper className="py-4">
            <div className="text-center space-y-4 mb-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-headline font-bold text-foreground">Para quem é o kit?</h2>
            </div>
            <div className="max-w-xl mx-auto">
                <Card className={cn("shadow-lg bg-card border-accent/30", "card-glow")}>
                    <CardContent className="p-6">
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
                </Card>
            </div>
        </SectionWrapper>
    )
}
