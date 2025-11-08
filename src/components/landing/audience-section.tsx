
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Gift, BookOpen, Users, Milestone } from "lucide-react";

const audience = [
  { text: "Mães e Pais que buscam momentos de qualidade e ensino com seus filhos.", icon: <Heart size={12} fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" /> },
  { text: "Avós, Tios e Padrinhos que desejam presentear com algo que edifica e diverte.", icon: <Gift size={12} fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" /> },
  { text: "Professores de Escola Dominical e Catequistas que precisam de materiais criativos.", icon: <BookOpen size={12} fill-="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" /> },
  { text: "Líderes de Ministério Infantil que querem engajar as crianças com a Palavra.", icon: <Users size={12} fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" /> },
  { text: "Qualquer pessoa que queira plantar sementes de fé nas futuras gerações.", icon: <Milestone size={12} fill="hsl(var(--accent))" stroke="hsl(var(--accent-foreground))" /> },
];

export default function AudienceSection() {
    return (
        <SectionWrapper className="pt-8 pb-8">
            <div className="max-w-xl mx-auto">
                <Card className="shadow-lg bg-card border-accent/30">
                    <CardHeader>
                        <CardTitle className="text-lg text-center font-headline font-semibold text-primary-foreground">Para quem é o kit?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="text-left text-sm text-muted-foreground space-y-3 w-full">
                        {audience.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-green mt-0.5">
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
