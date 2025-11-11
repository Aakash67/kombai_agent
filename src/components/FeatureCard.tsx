import { ArrowUpRight } from "lucide-react";
import type { FeatureCardProps } from "@/types";
import HomeIcon from "@/components/icons/HomeIcon";
import CameraIcon from "@/components/icons/CameraIcon";
import BuildingIcon from "@/components/icons/BuildingIcon";
import SparkleIcon from "@/components/icons/SparkleIcon";

const iconMap = {
  home: HomeIcon,
  camera: CameraIcon,
  building: BuildingIcon,
  sparkle: SparkleIcon,
};

export function FeatureCard({ title, icon }: FeatureCardProps) {
  const IconComponent = iconMap[icon as keyof typeof iconMap];
  
  return (
    <div className="flex flex-col items-center gap-4 rounded-[10px] border border-border-primary bg-bg-secondary p-6 shadow-[0px_0px_0px_6px_#191919]">
      <div className="flex h-[60px] w-[60px] items-center justify-center rounded-full bg-brand-purple">
        {IconComponent && <IconComponent width={24} height={24} color="#ffffff" />}
      </div>
      <span className="text-center text-link">{title}</span>
      <div className="rounded-full border-[1.5px] border-border-secondary p-2">
        <ArrowUpRight className="h-4 w-4 text-text-primary" />
      </div>
    </div>
  );
}