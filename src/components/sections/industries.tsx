import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { project } from "@/const/project";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StaggerGroup } from "@/components/motion/stagger-group";
import { DynamicIcon } from "@/components/icons/dynamic-icon";
import { Button } from "@/components/ui/button";

export async function Industries() {
  const t = await getTranslations("Home.Industries");
  const tItems = await getTranslations("Industries.items");

  return (
    <Section className="bg-muted/40">
      <SectionHeading
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <StaggerGroup className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {project.industries.map((industry) => (
          <Link
            key={industry.slug}
            href={industry.href}
            className="group flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent text-accent-foreground">
              <DynamicIcon name={industry.icon} className="size-4" />
            </span>
            <span className="text-sm font-medium text-primary">
              {tItems(industry.slug)}
            </span>
          </Link>
        ))}
      </StaggerGroup>

      <div className="mt-12 flex justify-center">
        <Button
          render={<Link href="/industries" />}
          variant="outline"
          size="lg"
          className="h-11 px-5 text-sm"
          nativeButton={false}
        >
          {t("cta")}
          <ArrowRight data-icon="inline-end" />
        </Button>
      </div>
    </Section>
  );
}
