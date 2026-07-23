import {
  BriefcaseBusiness,
  Calculator,
  Cpu,
  HandHeart,
  HardHat,
  HeartPulse,
  type LucideIcon,
  Receipt,
  Rocket,
  Scale,
  ShieldCheck,
  ShoppingCart,
  Store,
  TrendingUp,
  UtensilsCrossed,
  Users,
} from "lucide-react";

const icons: Record<string, LucideIcon> = {
  Calculator,
  Receipt,
  Users,
  Rocket,
  ShieldCheck,
  TrendingUp,
  Scale,
  HeartPulse,
  HardHat,
  UtensilsCrossed,
  Store,
  Cpu,
  ShoppingCart,
  BriefcaseBusiness,
  HandHeart,
};

type DynamicIconProps = {
  name: string;
  className?: string;
};

export function DynamicIcon({ name, className }: DynamicIconProps) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon className={className} />;
}
