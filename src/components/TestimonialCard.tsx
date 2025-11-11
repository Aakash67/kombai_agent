import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import type { TestimonialCardProps } from "@/types";

export function TestimonialCard({ rating, title, content, author, location, avatar }: TestimonialCardProps) {
  return (
    <Card className="rounded-xl border border-border-primary bg-bg-primary">
      <CardContent className="flex flex-col gap-7 p-10">
        <div className="flex gap-2">
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-brand-yellow text-brand-yellow" />
          ))}
        </div>
        
        <div className="flex flex-col gap-2.5">
          <h3 className="heading-card">{title}</h3>
          <p className="text-body">{content}</p>
        </div>
        
        <div className="flex items-center gap-3">
          <Avatar className="h-[50px] w-[50px]">
            <AvatarImage src={avatar} alt={author} />
            <AvatarFallback>{author.split(' ').map(n => n[0]).join('')}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="text-author">{author}</span>
            <span className="text-body">{location}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}