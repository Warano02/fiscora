import { Check } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";

export async function About() {
  const t = await getTranslations("Home.About");
  const points = t.raw("points") as string[];

  return (
    <Section>
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal>
          <span className="text-sm font-semibold tracking-wide text-secondary uppercase">
            {t("eyebrow")}
          </span>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-balance text-primary sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mt-6 text-lg text-muted-foreground text-pretty">
            {t("body")}
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground">
                  <Check className="size-3" />
                </span>
                <span className="text-base text-foreground">{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-4/3 rounded-3xl border border-border bg-[linear-gradient(135deg,var(--muted),var(--card))] p-8 shadow-sm">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-center gap-2">
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
                <span className="size-2.5 rounded-full bg-border" />
              </div>
              <div>
                <p className="text-6xl font-semibold tracking-tight text-primary">
                  {t("stat.value")}
                </p>
                <p className="mt-2 text-base text-muted-foreground">
                  {t("stat.label")}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
