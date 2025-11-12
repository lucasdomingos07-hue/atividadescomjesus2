
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionWrapper } from "./section-wrapper";
import { HelpCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "Tenho garantia na compra do kit?",
    answer:
      "Garantia de 7 Dias para sua tranquilidade: Se não achar que o material seja útil para as crianças, devolvemos 100% do valor investido — <strong>simples assim, com fé e transparência.</strong>",
  },
  {
    question: "Como vou receber o material?",
    answer:
      "O acesso ao material é 100% digital e imediato. Após a confirmação do pagamento, você receberá um e-mail com o link para baixar todo o conteúdo em PDF. Simples e rápido!",
  },
  {
    question: "Posso imprimir quantas vezes eu quiser?",
    answer:
      "Sim! O acesso ao material é vitalício. Você pode baixar e imprimir os desenhos e atividades quantas vezes desejar, para usar com todos os seus filhos, sobrinhos ou em turmas de catequese.",
  },
  {
    question: "Para qual idade é recomendado?",
    answer:
      "O material foi pensado para crianças de 3 a 10 anos. As atividades possuem diferentes níveis de complexidade, permitindo que crianças de várias idades aproveitem o conteúdo.",
  },
  {
    question: "A compra é segura?",
    answer:
      "Totalmente segura. O pagamento é processado pela maior plataforma de produtos digitais da América Latina, utilizando os mais altos padrões de segurança. Seus dados estão protegidos.",
  },
  {
    question: "E se eu não gostar do material?",
    answer:
      "Não se preocupe! Oferecemos uma garantia incondicional de 7 dias. Se, por qualquer motivo, você não ficar satisfeito, basta nos enviar um e-mail e devolveremos 100% do seu dinheiro, sem burocracia.",
  },
];

export default function FaqSection() {
  return (
    <SectionWrapper className="py-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-4 mb-8">
        <div className={cn("relative p-3 rounded-full flex items-center justify-center bg-accent/10 border-2 border-accent/20", "card-glow")}>
          <div className="absolute inset-0.5 rounded-full bg-accent/20 blur-lg"></div>
          <HelpCircle className="w-8 h-8 text-white relative" strokeWidth={1.5} />
        </div>
        <h2 className="text-xl font-headline font-bold text-foreground">
          Ainda tem dúvidas?<br />A gente responde:
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-xl mx-auto space-y-3">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className={cn(
                "bg-card shadow-sm rounded-xl border border-accent/20",
                "hover:border-accent/40 transition-all duration-300",
                "[&[data-state=open]]:border-accent/50"
            )}
          >
            <AccordionTrigger className="text-base text-left font-semibold hover:no-underline text-card-foreground px-6 py-4">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground text-sm px-6">
              <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </SectionWrapper>
  );
}
