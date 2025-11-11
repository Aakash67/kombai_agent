import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselControlsProps {
  currentIndex: number;
  total: number;
  onPrevious: () => void;
  onNext: () => void;
}

export function CarouselControls({ currentIndex, total, onPrevious, onNext }: CarouselControlsProps) {
  return (
    <div className="flex items-center justify-between border-t border-border-primary pt-10">
      <span className="text-body">
        {String(currentIndex + 1).padStart(2, '0')} of {total}
      </span>
      <div className="flex gap-4">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          className="h-12 w-12 rounded-full border-border-primary bg-bg-secondary hover:bg-bg-tertiary"
        >
          <ChevronLeft className="h-5 w-5 text-text-muted" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={onNext}
          className="h-12 w-12 rounded-full border-border-primary bg-bg-secondary hover:bg-bg-tertiary"
        >
          <ChevronRight className="h-5 w-5 text-text-primary" />
        </Button>
      </div>
    </div>
  );
}