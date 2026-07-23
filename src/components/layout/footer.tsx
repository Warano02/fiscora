import { Mail, MapPin, Phone } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { project } from "@/const/project";
import { Logo } from "@/components/layout/logo";

const socialLabels: Record<string, string> = {
  linkedin: "in",
  x: "X",
  instagram: "ig",
};

export async function Footer() {
  const t = await getTranslations();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              {t("Footer.tagline")}
            </p>
            <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <Mail className="size-4 shrink-0" />
                <a
                  href={`mailto:${project.contact.email}`}
                  className="hover:text-primary"
                >
                  {project.contact.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="size-4 shrink-0" />
                <a
                  href={`tel:${project.contact.phone.replace(/\s+/g, "")}`}
                  className="hover:text-primary"
                >
                  {project.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 size-4 shrink-0" />
                <span>
                  {project.contact.address.street},{" "}
                  {project.contact.address.postalCode}{" "}
                  {project.contact.address.city}
                </span>
              </li>
            </ul>
            <div className="mt-6 flex items-center gap-3">
              {project.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex size-9 items-center justify-center rounded-lg border border-border text-xs font-semibold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  {socialLabels[social.name] ?? social.name.charAt(0).toUpperCase()}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">
              {t("Footer.columns.company")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {project.nav.main.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={item.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {t(`Nav.${item.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">
              {t("Footer.columns.services")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {project.services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={service.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {t(`Services.items.${service.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-primary">
              {t("Footer.columns.industries")}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {project.industries.map((industry) => (
                <li key={industry.slug}>
                  <Link
                    href={industry.href}
                    className="text-muted-foreground hover:text-primary"
                  >
                    {t(`Industries.items.${industry.slug}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {year} {project.legalName}. {t("Footer.rightsReserved")}
          </p>
          <ul className="flex items-center gap-6 text-sm">
            {project.nav.legal.map((item) => (
              <li key={item.slug}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-primary"
                >
                  {t(`Nav.${item.slug}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
