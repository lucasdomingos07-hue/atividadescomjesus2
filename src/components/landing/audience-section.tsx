
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart } from "lucide-react";

const audience = [
  "Mães e Pais que buscam momentos de qualidade e ensino com seus filhos.",
  "Avós, Tios e Padrinhos que desejam presentear com algo que edifica e diverte.",
  "Professores de Escola Dominical e Catequistas que precisam de materiais criativos.",
  "Líderes de Ministério Infantil que querem engajar as crianças com a Palavra.",
  "Qualquer pessoa que queira plantar sementes de fé nas futuras gerações.",
];

export default function AudienceSection() {
    return (
        <SectionWrapper className="bg-primary/5 pt-0 pb-8">
            <div className="max-w-xl mx-auto md:-mt-16 mt-2">
                <Card className="shadow-lg bg-card border-accent/30">
                    <CardHeader>
                        <CardTitle className="text-lg text-center font-headline font-semibold text-primary-foreground">Para quem é o kit?</CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                        <div className="text-left text-sm text-muted-foreground space-y-2 w-full">
                        {audience.map((item, index) => (
                            <div key={index} className="flex items-start gap-3">
                            <div className="w-5 h-5 flex items-center justify-center shrink-0">
                                <Heart className="w-4 h-4 text-red-400" />
                            </div>
                            <span>{item}</span>
                            </div>
                        ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    )
}
