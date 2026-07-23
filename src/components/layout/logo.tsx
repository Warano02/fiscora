import { Link } from "@/i18n/navigation";
import { project } from "@/const/project";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export function Logo({ className }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={project.name}
      className={cn(
        "inline-flex items-center gap-2.5 text-lg font-semibold tracking-tight text-primary",
        className
      )}
    >
      <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-sm font-bold text-primary-foreground">
        {project.name.charAt(0)}
      </span>
      {project.name}
    </Link>
  );
}
