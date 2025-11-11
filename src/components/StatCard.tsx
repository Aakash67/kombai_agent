import type { StatCardProps } from "@/types";

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="flex flex-col gap-0.5 rounded-[10px] border border-border-primary bg-bg-secondary px-5 py-4">
      <span className="text-stat-value">{value}</span>
      <span className="text-body">{label}</span>
    </div>
  );
}