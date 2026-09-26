import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
};

export function BrandLogo({ className }: BrandLogoProps) {
  return (
    <span
      className={cn("brand-logo block shrink-0", className)}
      aria-hidden="true"
    />
  );
}
