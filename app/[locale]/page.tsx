import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { buildPageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/hero";
import { TrustedBy } from "@/components/sections/trusted-by";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { Industries } from "@/components/sections/industries";
import { Numbers } from "@/components/sections/numbers";
import { Testimonials } from "@/components/sections/testimonials";
import { LatestArticles } from "@/components/sections/latest-articles";
import { CTA } from "@/components/sections/cta";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return buildPageMetadata(locale, "Home");
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="flex-1">
      <Hero />
      <TrustedBy />
      <About />
      <Services />
      <WhyChooseUs />
      <Industries />
      <Numbers />
      <Testimonials />
      <LatestArticles />
      <CTA />
    </main>
  );
}
