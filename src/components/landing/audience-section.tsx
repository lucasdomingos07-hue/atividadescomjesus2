
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, BookOpen, Users, Milestone } from "lucide-react";
import { cn } from "@/lib/utils";

const audience = [
  { text: "Mães e Pais que buscam momentos de qualidade e ensino com seus filhos.", icon: <Heart className="w-full h-full text-accent" /> },
  { text: "Avós, Tios e Padrinhos que desejam presentear com algo que edifica e diverte.", icon: <Gift className="w-full h-full text-accent" /> },
  { text: "Professores de Escola Dominical e Catequistas que precisam de materiais criativos.", icon: <BookOpen className="w-full h-full text-accent" /> },
  { text: "Líderes de Ministério Infantil que querem engajar as crianças com a Palavra.", icon: <Users className="w-full h-full text-accent" /> },
  { text: "Qualquer pessoa que queira plantar sementes de fé nas futuras gerações.", icon: <Milestone className="w-full h-full text-accent" /> },
];

export default function AudienceSection() {
    return (
        <SectionWrapper className="pb-4">
            <div className="max-w-xl mx-auto">
                <Card className="shadow-lg bg-card border-accent/30">
                    <CardHeader>
                        <CardTitle className="text-xl text-center font-headline font-bold text-primary-foreground">Para quem é o kit?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
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
