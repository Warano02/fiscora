import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { project } from "@/const/project";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import "../globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({
  params,
}: Pick<Props, "params">): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    metadataBase: new URL(project.siteUrl),
    title: {
      template: t("titleTemplate"),
      default: t("defaultTitle"),
    },
    description: t("description"),
    alternates: {
      canonical: `/${locale}`,
      languages: Object.fromEntries(
        routing.locales.map((l) => [l, `/${l}`])
      ),
    },
    openGraph: {
      type: "website",
      siteName: project.name,
      title: t("defaultTitle"),
      description: t("description"),
      url: `/${locale}`,
      locale,
      images: [{ url: project.ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: t("defaultTitle"),
      description: t("description"),
      images: [project.ogImage],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${manrope.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-background text-foreground">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
          <a
            href={`https://wa.me/${project.contact.whatsapp.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Contacter Fiscora sur WhatsApp au ${project.contact.whatsapp}`}
            className="fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-500/20 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-[#22c55e] sm:bottom-6 sm:right-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M20.52 3.48A11.74 11.74 0 0 0 12 0C5.37 0 .12 5.25.12 11.88c0 2.09.55 4.15 1.6 5.94L0 24l6.37-1.67A11.84 11.84 0 0 0 12 23.76h.01c6.63 0 11.88-5.25 11.88-11.88 0-3.18-1.24-6.17-3.37-8.4Zm-8.19 17.58h-.01a9.35 9.35 0 0 1-4.76-1.3l-.34-.2-3.78.99.99-3.7-.22-.4A9.42 9.42 0 0 1 2.1 11.88C2.1 7.24 5.76 3.6 10.4 3.6c2.77 0 5.37 1.08 7.33 3.04a10.3 10.3 0 0 1 3.03 7.34c0 4.64-3.64 8.3-8.34 8.34Zm4.84-6.72c-.26-.13-1.53-.76-1.77-.85-.24-.09-.42-.13-.6.13-.17.26-.66.85-.81 1.02-.15.17-.3.19-.56.06-.26-.13-1.1-.4-2.1-1.3-.78-.68-1.3-1.53-1.46-1.79-.15-.26-.02-.4.11-.53.11-.11.24-.3.36-.45.12-.15.16-.26.24-.43.08-.17.04-.32-.02-.45-.07-.13-.6-1.45-.82-1.99-.22-.52-.45-.45-.6-.46h-.52c-.17 0-.45.06-.69.33-.24.26-.92.9-.92 2.2 0 1.3.94 2.56 1.07 2.74.13.18 1.86 2.85 4.52 3.99 1.2.52 2.14.83 2.87 1.06 1.21.38 2.31.33 3.18.2.97-.15 1.53-.62 1.75-1.15.22-.53.22-.98.15-1.07-.07-.09-.25-.15-.52-.27Z" />
            </svg>
          </a>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}