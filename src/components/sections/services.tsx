import { ArrowRight } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { project } from "@/const/project";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { DynamicIcon } from "@/components/icons/dynamic-icon";
import { Button } from "@/components/ui/button";

export async function Services() {
  const t = await getTranslations("Home.Services");
  const tItems = await getTranslations("Services.items");

  return (
    <Section className="bg-muted/40">
      <SectionHeading
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {project.services.map((service) => (
          <Link
            key={service.slug}
            href={service.href}
            className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
              <DynamicIcon name={service.icon} className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold text-primary">
              {tItems(service.slug)}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              {t(`descriptions.${service.slug}`)}
            </p>
            <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-secondary opacity-0 transition-opacity group-hover:opacity-100">
              {t("learnMore")}
              <ArrowRight className="size-3.5" />
            </span>
          </Link>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button
          render={<Link href="/services" />}
          variant="outline"
          size="lg"
          className="h-11 px-5 text-sm"
          nativeButton={false}
        >
          {t("cta")}
        </Button>
      </div>
    </Section>
  );
}
