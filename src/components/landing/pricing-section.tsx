
"use client";

import { SectionWrapper } from "./section-wrapper";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Users, Gift, Shield, Heart, Sparkles, Flame } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Kit Básico",
    subtitle: "Ideal para começar a jornada da fé através da arte.",
    description: "Uma seleção especial de desenhos para introduzir valores cristãos.",
    originalPrice: "R$29,90",
    price: "R$10,00",
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
    name: "Kit Completo",
    subtitle: "Ensine valores, fortaleça a fé e crie memórias eternas.",
    description: "+2 mil famílias recomendam este kit",
    originalPrice: "R$99,90",
    price: "R$19,90",
    priceDescription: "Acesso vitalício",
    features: [
      "100 Desenhos Bíblicos • fé e diversão em cada página",
      "25 Histórias Infantis • lições que tocam o coração",
      "Imprima quantas vezes quiser • acesso vitalício",
      "Suporte VIP personalizado • tire todas suas dúvidas",
    ],
    bonuses: [
      { title: "Devocional Infantil", oldPrice: "R$ 97,00", newPrice: "R$ 0,00" },
      { title: "Guia da Mãe de Fé", oldPrice: "R$ 117,00", newPrice: "R$ 0,00" },
      { title: "Calendário da Fé 2026", oldPrice: "R$ 67,00", newPrice: "R$ 0,00" },
    ],
    isRecommended: true,
    cta: "GARANTIR KIT COM 70% OFF",
    url: "https://pay.kiwify.com.br/5FQC1Cu"
  },
];

export default function PricingSection() {
  return (
    <SectionWrapper id="pricing" className="bg-secondary scroll-mt-20 pt-12 pb-12">
      <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto items-start">
        
        {/* Basic Plan */}
        <div className="flex flex-col h-full">
          <Card className="bg-slate-800/50 border-slate-700 text-white rounded-2xl flex-grow flex flex-col p-6 backdrop-blur-sm">
            <CardHeader className="p-0">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-blue-500/20">
                      <div className="w-5 h-5 rounded-sm bg-blue-400"></div>
                  </div>
                  <h3 className="font-semibold text-lg">Kit Básico</h3>
              </div>
              <p className="text-slate-300 pt-4 text-base">Ideal para começar a jornada da fé através da arte. Uma seleção especial de desenhos para introduzir valores cristãos.</p>
            </CardHeader>
            <CardContent className="p-0 mt-6 flex-grow">
              <div className="bg-slate-900/60 rounded-xl p-6 text-center">
                  <p className="text-slate-400">De <span className="line-through">R$49,90</span> por</p>
                  <p className="text-4xl font-bold text-white mt-1">R$10,00</p>
                  <p className="text-slate-400 text-sm">/ Acesso vitalício</p>
              </div>
              <ul className="space-y-3 mt-6 text-slate-200">
                {plans[0].features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-green-400" />
                    <span dangerouslySetInnerHTML={{ __html: feature }} />
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter className="p-0 mt-8">
              <a href={plans[0].url} className="w-full">
                <Button size="lg" className="w-full h-14 rounded-full bg-white text-slate-900 font-bold text-base hover:bg-slate-200">
                  {plans[0].cta}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>

        {/* Complete Plan */}
        <div className="flex flex-col h-full">
          <Card className="bg-gradient-to-br from-orange-500 to-red-600 text-white rounded-2xl flex-grow flex flex-col p-6 relative overflow-hidden">
            <div className="absolute top-4 right-[-50px] bg-red-700 text-white font-bold text-sm px-16 py-2 transform rotate-45">
              OFERTA
            </div>

            <div className="absolute top-0 left-0 right-0 py-2 bg-red-700 text-center">
                <p className="font-bold text-white flex items-center justify-center gap-2"><Flame className="w-4 h-4"/> Apenas Hoje • 70% OFF</p>
            </div>
            
            <CardHeader className="p-0 mt-12">
              <div className="flex items-center gap-2">
                  <div className="w-8 h-8 flex items-center justify-center rounded-md bg-green-500/20">
                      <div className="w-5 h-5 rounded-sm bg-green-300"></div>
                  </div>
                  <h3 className="font-semibold text-lg">Kit Completo</h3>
              </div>
              <p className="text-red-100 pt-4 text-lg font-semibold">Ensine valores, fortaleça a fé e crie memórias eternas.</p>
              <p className="text-red-200 text-sm">{plans[1].description}</p>
            </CardHeader>
            <CardContent className="p-0 mt-4 flex-grow">
              <div className="text-center mb-4">
                <p className="text-red-200">De <span className="line-through">R$99,90</span> por</p>
                <p className="text-5xl font-bold text-white mt-1">R$19,90</p>
                <p className="text-red-200 text-sm">/ Acesso vitalício</p>
              </div>

              <div className="bg-white/20 rounded-xl p-4 space-y-3 text-sm backdrop-blur-sm border border-white/20">
                <h4 className="font-bold text-center flex items-center justify-center gap-2"><Sparkles className="w-4 h-4"/> VOCÊ VAI RECEBER:</h4>
                 <ul className="space-y-2">
                  {plans[1].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-300 shrink-0" />
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-4 space-y-3">
                <h4 className="font-bold text-center flex items-center justify-center gap-2"><Gift className="w-4 h-4"/> Bônus Exclusivos (R$ 281 em Presentes)</h4>
                <div className="bg-white/20 rounded-xl p-4 space-y-2 text-sm backdrop-blur-sm border border-white/20">
                  {plans[1].bonuses?.map((bonus, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <span className="font-mono text-orange-200">T</span> {bonus.title}
                      </span>
                      <span>
                        <span className="line-through text-red-200">{bonus.oldPrice}</span> → <span className="font-bold">{bonus.newPrice}</span>
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <a href={plans[1].url} className="w-full">
                <Button size="lg" className="w-full h-14 rounded-full bg-white text-orange-600 font-bold text-base hover:bg-slate-200 shadow-lg hover:shadow-xl transition-all">
                  {plans[1].cta}
                </Button>
              </a>
            </CardFooter>
          </Card>
        </div>
      </div>

       <div className="text-center text-sm text-white mt-8 flex flex-col items-center justify-center gap-1">
        <div className="flex items-center gap-2">
          <Shield className="w-4 h-4 text-green-400"/>
          <p>Compra 100% segura</p>
        </div>
        <div className="flex items-center gap-2 font-bold">
            <Sparkles className="w-4 h-4 text-green-400"/>
            <p>Acesso imediato após o pagamento</p>
        </div>
      </div>
    </SectionWrapper>
  );
}
