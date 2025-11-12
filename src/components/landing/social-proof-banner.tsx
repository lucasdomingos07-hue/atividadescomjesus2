
import { Users } from "lucide-react";
import { SectionWrapper } from "./section-wrapper";
import { cn } from "@/lib/utils";

export default function SocialProofBanner() {
    return (
        <SectionWrapper className="py-4">
            <div className="max-w-xl mx-auto">
                <div className={cn("flex items-center justify-center text-center gap-3 bg-card p-3 rounded-lg w-full max-w-md mx-auto border border-border")}>
                    <Users className="w-6 h-6 text-primary shrink-0"/>
                    <span className="font-medium text-left text-sm leading-tight text-primary">
                      <strong>+ de 5 mil</strong> famílias já transformaram o tempo de tela em diversão e aprendizado.
                    </span>
                </div>
            </div>
        </SectionWrapper>
    )
}
