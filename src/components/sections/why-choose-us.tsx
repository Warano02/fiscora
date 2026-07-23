import { MonitorSmartphone, Target, UserCheck, Zap } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StaggerGroup } from "@/components/motion/stagger-group";

const icons = [Target, UserCheck, MonitorSmartphone, Zap];

export async function WhyChooseUs() {
  const t = await getTranslations("Home.WhyChooseUs");
  const items = t.raw("items") as { title: string; description: string }[];

  return (
    <Section>
      <SectionHeading
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item, index) => {
          const Icon = icons[index];
          return (
            <div
              key={item.title}
              className="rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
            >
              <span className="flex size-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-primary">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {item.description}
              </p>
            </div>
          );
        })}
      </StaggerGroup>
    </Section>
  );
}
