
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { SectionWrapper } from "./section-wrapper";

export default function CreatorSection() {
    const creatorImage = PlaceHolderImages.find(img => img.id === "creator-monica-2");

    return (
        <SectionWrapper className="pt-12 pb-12">
            <div className="max-w-xl mx-auto">
                <Card className="shadow-lg bg-card border-accent/20 rounded-2xl p-6 md:p-8">
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
                        <h2 className="text-xl font-headline font-bold text-headline mt-2">
                            Conheça a criadora das Atividades 📚
                        </h2>
                        <p className="text-base text-muted-foreground">
                            "Sou mãe, psicóloga infantil e cristã, e percebi que muitas famílias estão lutando contra o excesso de telas. Criei o <strong>Colorindo Fé e Alegria</strong> para que pais possam ensinar fé e valores com amor — de um jeito leve, criativo e longe das telas. Feito com muito carinho, espero que abençoe o seu lar ❤️"
                        </p>
                        <p className="font-semibold text-primary-foreground text-lg">- Mônica Alencar</p>
                    </CardContent>
                </Card>
            </div>
        </SectionWrapper>
    );
}
