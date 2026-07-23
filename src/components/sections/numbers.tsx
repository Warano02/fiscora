import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Counter } from "@/components/motion/counter";

type Stat = { value: number; suffix: string; label: string };

export async function Numbers() {
  const t = await getTranslations("Home.Numbers");
  const stats = t.raw("stats") as Stat[];

  return (
    <Section className="bg-primary text-primary-foreground">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          {t("heading")}
        </h2>
        <p className="mt-4 text-lg text-primary-foreground/70 text-pretty">
          {t("subheading")}
        </p>
      </Reveal>

      <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              className="text-4xl font-semibold tracking-tight sm:text-5xl"
            />
            <p className="mt-2 text-sm text-primary-foreground/70">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
