
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Gift, Shield, Heart } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "📚 Kit Básico",
    subtitle: "Ideal para começar a jornada<br />da fé através da arte.",
    description: "",
    originalPrice: "R$29,90",
    price: "R$19,90",
    priceDescription: "Acesso vitalício",
    features: [
      "100 Desenhos Bíblicos • fé e diversão em cada página",
      "Imprima e use sempre que quiser",
    ],
    isRecommended: false,
    cta: "GARANTIR KIT BÁSICO",
    url: "https://pay.kiwify.com.br/ab5tuPe"
  },
  {
    name: "📚 Kit Completo",
    subtitle: "Ensine valores, fortaleça a fé e crie<br />memórias que ficam para sempre.",
    description: "Uma seleção especial de desenhos e histórias para introduzir valores cristãos.",
    originalPrice: "R$119,90",
    price: "R$29,90",
    priceDescription: "Acesso vitalício",
    features: [
      "100 Desenhos Bíblicos • fé e diversão em cada página",
      "25 Histórias infantis • lições que tocam o coração",
      "Imprima e use sempre que quiser",
      "Suporte e orientação personalizados",
    ],
    bonuses: [
      { title: "Devocional Infantil", oldPrice: "R$ 29,90", newPrice: "R$ 0,00" },
      { title: "Guia da Mãe de Fé", oldPrice: "R$ 19,90", newPrice: "R$ 0,00" },
      { title: "Calendário da Fé 2026", oldPrice: "R$ 19,90", newPrice: "R$ 0,00" },
    ],
    isRecommended: true,
    cta: "GARANTIR KIT COM 75% OFF",
    url: "https://pay.kiwify.com.br/5FQC1Cu"
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary scroll-mt-20 pt-4 pb-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-2 mb-8">
        <h2 className="text-2xl md:text-3xl font-headline font-bold text-foreground">
          Pronta para viver tudo<br />isso com seu filho?
        </h2>
        <p className="text-lg text-foreground mt-2">
          Selecione sua Oferta e Comece a criar<br />momentos que o tempo não apaga
        </p>
      </div>
      <div className="max-w-xl mx-auto">
        <div className="grid grid-cols-1 gap-8">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
              "shadow-lg relative flex flex-col h-full bg-card overflow-hidden rounded-lg",
              plan.isRecommended ? 'border-accent border-2' : 'border'
            )}>
              <CardHeader className="items-center text-center p-0">
                <div className="py-6 pb-2 w-full flex flex-col items-center">
                  {plan.isRecommended && (
                    <div className="bg-black text-white text-sm px-3 py-1 rounded-lg shadow-lg mb-4 text-base">
                      <span><strong>Apenas Hoje</strong> • <span className="text-brand-green">75% OFF</span></span>
                    </div>
                  )}
                </div>
                <div className={cn(
                    "py-2 w-full px-6",
                    plan.isRecommended ? "bg-brand-green shine-effect" : "bg-muted"
                )}>
                  <h3 className={cn(
                    "font-headline font-semibold text-xl leading-tight",
                    plan.isRecommended ? "text-primary-foreground" : "text-muted-foreground"
                  )}>
                    {plan.name}
                  </h3>
                </div>
                <div className="p-6 pt-2 w-full flex flex-col items-center">
                  <div className="flex flex-col gap-1 mt-3">
                    <CardTitle className="text-base font-headline font-semibold text-card-foreground" dangerouslySetInnerHTML={{ __html: plan.subtitle }} />
                  </div>
                  <CardDescription className={cn(
                    "text-sm text-muted-foreground !mt-3 px-4"
                  )}>
                    {plan.description}
                  </CardDescription>
                  
                  <div className="text-center pt-4">
                    <p className="text-xl font-semibold text-muted-foreground mt-2">De <span className="line-through">{plan.originalPrice}</span> por</p>
                    <div className="text-4xl font-bold font-headline py-2 text-accent-foreground">
                      {plan.price}
                    </div>
                    <p className="font-bold text-lg text-muted-foreground"> / {plan.priceDescription}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-6 flex-grow px-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 bg-accent-foreground mt-0.5">
                        <Check className="w-3.5 h-3.5 text-accent" />
                      </div>
                      <span className="text-card-foreground font-semibold" dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                   {plan.finalBullet && plan.isRecommended && (
                    <li className="flex items-start gap-3">
                      <div className="w-5 h-5 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xl">💝</span>
                      </div>
                      <span className="text-card-foreground font-semibold">{plan.finalBullet}</span>
                    </li>
                  )}
                </ul>
                {plan.bonuses && (
                   <div className="border-t border-dashed pt-6 space-y-4">
                      <h4 className="font-headline font-semibold text-center text-xl text-card-foreground flex flex-col items-center gap-1">
                        <span>Bônus Exclusivos</span>
                        <span className="text-base font-medium text-muted-foreground">(R$ 70,00 em Presentes)</span>
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
              <CardFooter className="mt-auto p-6 flex flex-col gap-2">
                <a href={plan.url} className="w-full">
                  {plan.isRecommended ? (
                    <Button size="lg" className={cn("w-full font-bold text-lg h-14 rounded-full cta-glow shine-effect")}>
                      {plan.cta}
                    </Button>
                  ) : (
                    <Button size="lg" className={cn("w-full font-bold text-base h-14 rounded-full bg-accent-foreground text-accent")}>
                      {plan.cta}
                    </Button>
                  )}
                </a>
                {plan.isRecommended && (
                  <p className="text-sm text-muted-foreground mt-2 font-semibold text-center">+2 mil famílias recomendam este kit</p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

       <div className="text-center text-sm text-foreground mt-4 flex flex-col items-center justify-center gap-0">
        <p className="text-white">🔒 Compra 100% segura</p>
        <p className="text-white font-bold">Acesso imediato após o pagamento</p>
      </div>
    </SectionWrapper>
  );
}

    
    
