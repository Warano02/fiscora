import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";
import { project } from "@/const/project";
import { Link } from "@/i18n/navigation";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "Industries", "industries");
}

export default async function IndustriesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Industries");

  return (
    <main className="mx-auto max-w-3xl px-6 py-24">
      <h1 className="text-3xl font-semibold tracking-tight">{t("heading")}</h1>
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {project.industries.map((industry) => (
          <li key={industry.slug}>
            <Link
              href={industry.href}
              className="block rounded-lg border border-border bg-card px-4 py-3 text-sm text-foreground hover:border-secondary"
            >
              {t(`items.${industry.slug}`)}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}