export const project = {
  name: "Fiscora",
  legalName: "Fiscora SAS",
  domain: "fiscora.fr",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "https://fiscora.fr",
  themeColor: "#0F172A",
  logo: "/logo.svg",
  ogImage: "/og-image.jpg",
  foundingYear: 2026,

  contact: {
    email: "contact@fiscora.fr",
    phone: "+33 1 23 45 67 89",
    address: {
      street: "12 Avenue des Champs-Élysées",
      postalCode: "75008",
      city: "Paris",
      country: "FR",
    },
  },

  legal: {
    siren: "000 000 000",
    siret: "000 000 000 00000",
    vatNumber: "FR00 000000000",
    rcs: "Paris B 000 000 000",
  },

  socials: [
    { name: "linkedin", url: "https://www.linkedin.com/company/fiscora" },
    { name: "x", url: "https://x.com/fiscora" },
    { name: "instagram", url: "https://www.instagram.com/fiscora" },
  ],

  nav: {
    main: [
      { slug: "about", href: "/about" },
      { slug: "services", href: "/services" },
      { slug: "industries", href: "/industries" },
      { slug: "contact", href: "/contact" },
    ],
    legal: [
      { slug: "privacy", href: "/privacy" },
    ],
  },

  services: [
    { slug: "accounting", href: "/services/accounting", icon: "Calculator" },
    { slug: "tax-advisory", href: "/services/tax-advisory", icon: "Receipt" },
    { slug: "payroll", href: "/services/payroll", icon: "Users" },
    { slug: "business-creation", href: "/services/business-creation", icon: "Rocket" },
    { slug: "audit", href: "/services/audit", icon: "ShieldCheck" },
    { slug: "financial-consulting", href: "/services/financial-consulting", icon: "TrendingUp" },
    { slug: "legal-assistance", href: "/services/legal-assistance", icon: "Scale" },
  ],

  industries: [
    { slug: "healthcare", href: "/industries/healthcare", icon: "HeartPulse" },
    { slug: "construction", href: "/industries/construction", icon: "HardHat" },
    { slug: "restaurants", href: "/industries/restaurants", icon: "UtensilsCrossed" },
    { slug: "retail", href: "/industries/retail", icon: "Store" },
    { slug: "technology", href: "/industries/technology", icon: "Cpu" },
    { slug: "ecommerce", href: "/industries/ecommerce", icon: "ShoppingCart" },
    { slug: "liberal-professions", href: "/industries/liberal-professions", icon: "BriefcaseBusiness" },
    { slug: "associations", href: "/industries/associations", icon: "HandHeart" },
  ],
} as const;

export type ServiceSlug = (typeof project.services)[number]["slug"];
export type IndustrySlug = (typeof project.industries)[number]["slug"];