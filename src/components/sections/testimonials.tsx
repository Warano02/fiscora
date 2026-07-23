import { Quote } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StaggerGroup } from "@/components/motion/stagger-group";

type Testimonial = { quote: string; name: string; role: string; company: string };

export async function Testimonials() {
  const t = await getTranslations("Home.Testimonials");
  const items = t.raw("items") as Testimonial[];

  return (
    <Section>
      <SectionHeading eyebrow={t("eyebrow")} heading={t("heading")} />

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {items.map((item) => (
          <figure
            key={item.name}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <Quote className="size-6 text-secondary" />
            <blockquote className="mt-4 flex-1 text-base text-foreground text-pretty">
              &ldquo;{item.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-6">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-sm font-semibold text-muted-foreground">
                {item.name.charAt(0)}
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">{item.name}</p>
                <p className="text-xs text-muted-foreground">
                  {item.role} · {item.company}
                </p>
              </div>
            </figcaption>
          </figure>
        ))}
      </StaggerGroup>
    </Section>
  );
}
