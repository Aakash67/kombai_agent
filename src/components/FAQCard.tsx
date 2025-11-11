import { Card, CardContent } from "@/components/ui/card";
import type { FAQCardProps } from "@/types";

export function FAQCard({ question, preview }: FAQCardProps) {
  return (
    <Card className="rounded-xl border border-border-primary bg-bg-primary">
      <CardContent className="flex flex-col gap-6 p-10">
        <h3 className="heading-card leading-[30px]">{question}</h3>
        <p className="text-body">{preview}</p>
        <button className="self-start border-b border-border-primary pb-1 text-sm font-medium tracking-[-0.08px] text-text-primary">
          Read More
        </button>
      </CardContent>
    </Card>
  );
}