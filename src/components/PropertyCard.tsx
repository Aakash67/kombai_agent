import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { PropertyCardProps } from "@/types";
import BedIcon from "@/components/icons/BedIcon";
import BathroomIcon from "@/components/icons/BathroomIcon";
import VillaIcon from "@/components/icons/VillaIcon";

export function PropertyCard({ name, description, bedrooms, bathrooms, type, price, image }: PropertyCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl border border-border-primary bg-bg-primary">
      <img 
        src={image} 
        alt={name}
        className="h-[255px] w-full rounded-[10px] object-cover"
      />
      <CardContent className="flex flex-col gap-5 p-6">
        <div className="flex flex-col gap-1">
          <h3 className="heading-card">{name}</h3>
          <p className="text-body">
            {description} <span className="text-text-primary underline">Read More</span>
          </p>
        </div>
        
        <div className="flex gap-1.5">
          <Badge variant="outline" className="gap-1 rounded-[28px] border-border-primary bg-bg-secondary px-3 py-2">
            <BedIcon width={20} height={17} color="#ffffff" />
            <span className="text-label">{bedrooms}-Bedroom</span>
          </Badge>
          <Badge variant="outline" className="gap-1 rounded-[28px] border-border-primary bg-bg-secondary px-3 py-2">
            <BathroomIcon width={20} height={20} color="#ffffff" />
            <span className="text-label">{bathrooms}-Bathroom</span>
          </Badge>
          <Badge variant="outline" className="gap-1 rounded-[28px] border-border-primary bg-bg-secondary px-3 py-2">
            <VillaIcon width={14} height={16} color="#ffffff" />
            <span className="text-label">{type}</span>
          </Badge>
        </div>
        
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-label-secondary">Price</span>
            <span className="heading-card">${price.toLocaleString()}</span>
          </div>
          <Button className="bg-brand-purple text-label hover:bg-brand-purple/90">
            View Property Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}