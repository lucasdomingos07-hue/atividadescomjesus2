
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Gift, Shield, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Kit Colorindo Fé e Alegria",
    subtitle: "Ensine valores e divirta seu filho",
    description: "O pacote ideal para desenvolver fé, criatividade e atenção das crianças.",
    originalPrice: "R$99,90",
    price: "R$29,90",
    priceDescription: "Acesso vitalício",
    features: [
      "100 Desenhos Bíblicos — fé e diversão em cada página",
      "25 Histórias infantis — lições que tocam o coração",
      "Imprima e use sempre que quiser",
      "Suporte e orientação personalizados",
      "Ajude seu filho a crescer com fé, foco e valores.",
    ],
    bonuses: [
      { title: "Devocional Infantil", oldPrice: "R$ 29,90", newPrice: "R$ 0,00" },
      { title: "Guia da Mãe de Fé", oldPrice: "R$ 19,90", newPrice: "R$ 0,00" },
      { title: "Calendário da Fé 2026", oldPrice: "R$ 19,90", newPrice: "R$ 0,00" },
    ],
    isRecommended: true,
    cta: "KIT COMPLETO COM 70%OFF",
    url: "https://app.ombrelone.com/checkout/digital/3y799g6jpv"
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary scroll-mt-20 pt-4 pb-8">
      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
              "shadow-lg relative flex flex-col h-full bg-card overflow-hidden rounded-lg",
              plan.isRecommended ? 'border-accent border-2' : 'border'
            )}>
              <CardHeader className="items-center text-center pt-6">
                 {plan.isRecommended && (
                  <div className="bg-brand-green text-accent-foreground text-sm font-bold px-3 py-1 rounded-full shadow-lg mb-4 text-base">
                    70% OFF
                  </div>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline font-semibold text-[1.45rem] text-card-foreground leading-tight">
                    {plan.name}
                  </h3>
                  <CardTitle className="text-base font-headline font-semibold text-card-foreground">{plan.subtitle}</CardTitle>
                </div>
                <CardDescription className="text-sm text-muted-foreground !mt-3 px-4">{plan.description}</CardDescription>
                
                <div className="text-center pt-4">
                  <p className="text-xl font-semibold text-muted-foreground mt-2">De <span className="line-through">{plan.originalPrice}</span> por</p>
                  <div className="text-4xl font-bold font-headline py-2 text-accent-foreground">
                    {plan.price}
                  </div>
                  <p className="font-bold text-lg text-muted-foreground"> / {plan.priceDescription}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-accent-foreground mt-0.5">
                        <Check className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-card-foreground font-semibold" dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
                {plan.bonuses && (
                   <div className="border-t border-dashed pt-6 space-y-4">
                      <h4 className="font-headline font-semibold text-center text-xl text-card-foreground flex flex-col items-center gap-1">
                        <div className="flex items-center gap-2">
                            <Gift className="w-6 h-6 text-brand-green"/>
                            <span>Bônus Exclusivos</span>
                        </div>
                        <span className="text-base font-medium text-muted-foreground">(R$ 70,00 em Presentes!)</span>
                      </h4>
                      <ul className="space-y-4">
                        {plan.bonuses.map((bonus, index) => (
                           <li key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-green text-accent-foreground p-0.5 mt-1">
                                <Gift className="w-full h-full"/>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-card-foreground font-semibold">
                                  {bonus.title}
                                </span>
                                <div className="text-sm">
                                  <span className="line-through text-muted-foreground/80">{bonus.oldPrice}</span> por <strong className="text-card-foreground">{bonus.newPrice}</strong>
                                </div>
                              </div>
                           </li>
                        ))}
                      </ul>
                  </div>
                )}
              </CardContent>
              <CardFooter className="mt-auto p-6">
                <a href={plan.url} className="w-full">
                  {plan.isRecommended ? (
                    <Button size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full cta-glow shine-effect")}>
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button variant="outline" size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full border-accent text-accent hover:bg-accent/10 hover:text-accent")}>
                      {plan.cta}
                    </Button>
                  )}
                </a>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

       <p className="text-center text-sm text-foreground mt-4 flex items-center justify-center gap-2">
        <span className="text-white">Compra 100% Segura</span> <Shield className="w-4 h-4 text-white" />
      </p>
    </SectionWrapper>
  );
}
