
import { SectionWrapper } from "./section-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";

const points = [
  "As telas estão tomando tempo demais das crianças",
  "Os momentos em família estão ficando raros",
  "Ensinar valores está mais difícil do que deveria",
  "E você queria algo simples para viver mais fé no dia a dia",
];

export default function TargetAudienceSection() {
    return (
        <SectionWrapper className="py-8 pb-4">
            <div className="max-w-xl mx-auto">
                <Card className="shadow-lg bg-card border-accent/20 rounded-2xl p-6 md:p-8">
                    <CardContent className="p-0 flex flex-col items-center text-center gap-4">
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
                        <p className="font-semibold text-primary-foreground text-lg mt-2">
                            Então esse kit foi criado exatamente para você.
                        </p>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    );
}
