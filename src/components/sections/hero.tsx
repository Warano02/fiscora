import { getTranslations } from "next-intl/server";
import { HeroContent } from "@/components/sections/hero-content";

export async function Hero() {
  const t = await getTranslations("Home.Hero");
  const stats = t.raw("stats") as { value: string; label: string }[];

  return (
    <HeroContent
      eyebrow={t("eyebrow")}
      heading={t("heading")}
      subheading={t("subheading")}
      primaryCta={t("primaryCta")}
      secondaryCta={t("secondaryCta")}
      panelLabel={t("panelLabel")}
      panelCaption={t("panelCaption")}
      panelBadge={t("panelBadge")}
      panelAmount={t("panelAmount")}
      panelTeamLabel={t("panelTeamLabel")}
      panelComplianceLabel={t("panelComplianceLabel")}
      panelComplianceCaption={t("panelComplianceCaption")}
      stats={stats}
    />
  );
}
