
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Gift, Shield, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Kit Colorindo Fé e Alegria",
    subtitle: "Material Completo",
    originalPrice: "R$97,90",
    price: "R$27,90",
    priceDescription: "Acesso vitalício",
    features: [
      "100 Desenhos Bíblicos para colorir",
      "25 Histórias infantis que tornam o aprendizado espiritual leve e envolvente",
      "Imprima quando quiser",
      "Suporte individual via e-mail"
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

const audience = [
  "Mães, Pais e Avós",
  "Catequistas e líderes de ministério infantil",
  "Qualquer pessoa que queira ensinar a Bíblia de forma criativa",
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary scroll-mt-20 pt-4 pb-12">
      <div className="text-center space-y-4 mb-8 max-w-3xl mx-auto">
        <div className="flex items-center justify-center text-center gap-3 text-muted-foreground bg-card/80 p-3 rounded-lg border border-primary/30 max-w-md mx-auto">
            <Users className="w-6 h-6 text-accent shrink-0"/>
            <span className="font-medium text-left text-sm leading-tight">
              <strong>+ de 5 mil</strong> famílias já transformaram o tempo de tela das crianças em diversão e aprendizado.
            </span>
        </div>
      </div>
      
      <div className="max-w-xl mx-auto mb-8">
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

      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
              "shadow-lg relative flex flex-col h-full bg-card overflow-hidden rounded-lg",
              plan.isRecommended ? 'border-accent border-2' : 'border'
            )}>
              <CardHeader className="items-center text-center pt-8">
                 {plan.isRecommended && (
                  <div className="bg-brand-green text-accent text-sm font-bold px-3 py-1 rounded-full shadow-lg mb-4 text-base">
                    70% OFF
                  </div>
                )}
                <div className="flex flex-col">
                  <h3 className="font-headline font-semibold text-[1.45rem] text-primary-foreground flex items-center justify-center gap-2">
                    <Gift className="w-6 h-6 text-accent" />
                    {plan.name}
                  </h3>
                  <CardTitle className="text-base font-headline font-semibold">{plan.subtitle}</CardTitle>
                </div>
                
                <div className="text-center pt-4">
                  <p className="text-xl font-semibold text-muted-foreground mt-2">De <span className="line-through">{plan.originalPrice}</span> por</p>
                  <div className="text-4xl font-bold font-headline py-2 text-accent">
                    {plan.price}
                  </div>
                  <p className="font-bold text-lg text-muted-foreground"> / {plan.priceDescription}</p>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-accent">
                        <Check className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-secondary-foreground font-semibold">{feature}</span>
                    </li>
                  ))}
                </ul>
                {plan.bonuses && (
                   <div className="border-t border-dashed pt-6 space-y-4">
                      <h4 className="font-headline font-semibold text-center text-xl text-primary-foreground">Bônus Exclusivos:</h4>
                      <ul className="space-y-4">
                        {plan.bonuses.map((bonus, index) => (
                           <li key={index} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-brand-green text-accent p-0.5 mt-1">
                                <Gift className="w-full h-full"/>
                              </div>
                              <div className="flex flex-col">
                                <span className="text-secondary-foreground font-semibold">
                                  {bonus.title}
                                </span>
                                <div className="text-sm">
                                  <span className="line-through text-muted-foreground/80">{bonus.oldPrice}</span> por <strong className="text-primary-foreground">{bonus.newPrice}</strong>
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

       <p className="text-center text-sm text-muted-foreground mt-4 flex items-center justify-center gap-2">
        Compra 100% Segura <Shield className="w-4 h-4 text-muted-foreground" />
      </p>
    </SectionWrapper>
  );
}
