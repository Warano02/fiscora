import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { StaggerGroup } from "@/components/motion/stagger-group";

export async function TrustedBy() {
  const t = await getTranslations("Home.TrustedBy");
  const names = t.raw("names") as string[];

  return (
    <Section className="py-14 sm:py-16">
      <Reveal>
        <p className="text-center text-sm font-medium text-muted-foreground">
          {t("heading")}
        </p>
      </Reveal>
      <StaggerGroup className="mt-8 grid grid-cols-2 items-center gap-x-8 gap-y-6 sm:grid-cols-3 lg:grid-cols-6">
        {names.map((name) => (
          <span
            key={name}
            className="text-center text-base font-semibold tracking-tight text-muted-foreground/60 transition-colors hover:text-primary"
          >
            {name}
          </span>
        ))}
      </StaggerGroup>
    </Section>
  );
}
