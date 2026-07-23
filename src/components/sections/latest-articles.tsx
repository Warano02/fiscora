import { Clock } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Section } from "@/components/layout/section";
import { SectionHeading } from "@/components/sections/section-heading";
import { StaggerGroup } from "@/components/motion/stagger-group";

type Article = {
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
};

export async function LatestArticles() {
  const t = await getTranslations("Home.LatestArticles");
  const items = t.raw("items") as Article[];

  return (
    <Section className="bg-muted/40">
      <SectionHeading
        eyebrow={t("eyebrow")}
        heading={t("heading")}
        subheading={t("subheading")}
      />

      <StaggerGroup className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {items.map((article) => (
          <article
            key={article.title}
            className="flex flex-col rounded-2xl border border-border bg-card p-7 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
              <span className="rounded-full bg-accent px-2.5 py-1 text-accent-foreground">
                {article.category}
              </span>
              <span className="inline-flex items-center gap-1">
                <Clock className="size-3.5" />
                {article.readTime}
              </span>
            </div>
            <h3 className="mt-4 text-lg font-semibold text-balance text-primary">
              {article.title}
            </h3>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">
              {article.excerpt}
            </p>
          </article>
        ))}
      </StaggerGroup>
    </Section>
  );
}
