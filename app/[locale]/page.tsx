import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "Home");
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("Home");

  return (
    <main className="flex flex-1 flex-col items-center justify-center px-6 py-32 text-center">
      <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {t("heading")}
      </h1>
    </main>
  );
}