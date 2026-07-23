import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";

export async function buildPageMetadata(
  locale: string,
  namespace: string,
  path = ""
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace });
  const localizedPath = path ? `/${path}` : "";

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: `/${locale}${localizedPath}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}${localizedPath}`])
      ),
    },
  };
}