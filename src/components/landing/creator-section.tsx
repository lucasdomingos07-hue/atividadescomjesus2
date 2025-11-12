
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "./section-wrapper";
import { cn } from "@/lib/utils";

export default function CreatorSection() {
    const creatorImage = PlaceHolderImages.find(img => img.id === "creator-monica-2");

    return (
        <SectionWrapper className="py-4">
            <div className="text-center space-y-4 mb-6 max-w-2xl mx-auto">
                <h2 className="text-xl font-headline font-bold text-foreground">
                    Conheça a criadora<br />das Atividades 📚
                </h2>
            </div>
            <div className="max-w-xl mx-auto">
                <Card className={cn("shadow-lg bg-card border-accent/20 rounded-2xl p-6 md:p-8", "card-glow")}>
                    <CardContent className="p-0 flex flex-col items-center text-center gap-4">
                        {creatorImage && (
                            <div className="relative">
                                <Image
                                    src={creatorImage.imageUrl}
                                    alt={creatorImage.description}
                                    width={140}
                                    height={140}
                                    data-ai-hint={creatorImage.imageHint}
                                    className="rounded-full w-28 h-28 md:w-32 md:h-32 object-cover border-4 border-white shadow-md"
                                />
                                <div className="absolute inset-0 rounded-full border-4 border-brand-green ring-4 ring-brand-green/50 animate-pulse"></div>
                            </div>
                        )}
                        <div className="flex flex-col items-center gap-1">
                            <p className="font-semibold text-primary-foreground text-lg">- Mônica Alencar</p>
                            <p className="text-sm text-muted-foreground">Psicóloga há 12 anos</p>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            "Como mãe e psicóloga infantil cristã, vi muitas famílias perdendo momentos preciosos por causa das telas. Criei o Colorindo Fé e Alegria para ajudar pais a ensinarem valores e fortalecerem a fé — de um jeito simples, leve e cheio de amor. Que abençoe o seu lar tanto quanto abençoou o meu ❤️"
                        </p>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    );
}
