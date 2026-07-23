import { Reveal } from "@/components/motion/reveal";
import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  align = "center",
  className,
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <Reveal
      className={cn(isCenter ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}
    >
      {eyebrow && (
        <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
        {heading}
      </h2>
      {subheading && (
        <p className="mt-4 text-lg text-muted-foreground text-pretty">
          {subheading}
        </p>
      )}
    </Reveal>
  );
}
