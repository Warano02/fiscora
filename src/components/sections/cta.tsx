import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { Section } from "@/components/layout/section";
import { Reveal } from "@/components/motion/reveal";
import { Button } from "@/components/ui/button";

export async function CTA() {
  const t = await getTranslations("Home.CTA");

  return (
    <Section>
      <Reveal className="relative overflow-hidden rounded-3xl bg-primary px-8 py-16 text-center shadow-xl sm:px-16 sm:py-20">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_80%_at_50%_0%,var(--secondary)_0%,transparent_70%)] opacity-20"
        />
        <div className="relative">
          <h2 className="mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-balance text-primary-foreground sm:text-4xl">
            {t("heading")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/70 text-pretty">
            {t("subheading")}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button
              render={<Link href="/contact" />}
              variant="secondary"
              size="lg"
              className="h-11 px-5 text-sm"
              nativeButton={false}
            >
              {t("primaryCta")}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/contact" />}
              variant="ghost"
              size="lg"
              className="h-11 px-5 text-sm text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground"
              nativeButton={false}
            >
              {t("secondaryCta")}
            </Button>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
