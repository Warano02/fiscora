"use client";

import { useEffect, useRef } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { gsap } from "@/lib/gsap";
import { Link } from "@/i18n/navigation";
import { Button } from "@/components/ui/button";

type Stat = { value: string; label: string };

type HeroContentProps = {
  eyebrow: string;
  heading: string;
  subheading: string;
  primaryCta: string;
  secondaryCta: string;
  panelLabel: string;
  panelCaption: string;
  panelBadge: string;
  panelAmount: string;
  panelTeamLabel: string;
  panelComplianceLabel: string;
  panelComplianceCaption: string;
  stats: Stat[];
};

const chartBars = [38, 52, 44, 61, 55, 72, 68, 84, 76, 92];

export function HeroContent({
  eyebrow,
  heading,
  subheading,
  primaryCta,
  secondaryCta,
  panelLabel,
  panelCaption,
  panelBadge,
  panelAmount,
  panelTeamLabel,
  panelComplianceLabel,
  panelComplianceCaption,
  stats,
}: HeroContentProps) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.from("[data-hero-eyebrow]", { y: 16, opacity: 0, duration: 0.6 }, 0)
        .from("[data-hero-heading]", { y: 24, opacity: 0, duration: 0.8 }, 0.2)
        .from("[data-hero-subheading]", { y: 20, opacity: 0, duration: 0.7 }, 0.3)
        .from(
          "[data-hero-actions] > *",
          { y: 16, opacity: 0, duration: 0.6, stagger: 0.1 },
          0.4
        )
        .from(
          "[data-hero-stat]",
          { y: 16, opacity: 0, duration: 0.5, stagger: 0.08 },
          0.5
        )
        .from("[data-hero-panel]", { x: 32, opacity: 0, duration: 0.9 }, 0.3);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[560px] bg-[radial-gradient(60%_60%_at_50%_0%,var(--secondary)_0%,transparent_70%)] opacity-[0.07]"
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 py-20 sm:py-28 lg:grid-cols-2 lg:px-8 lg:py-32">
        <div>
          <span
            data-hero-eyebrow
            className="inline-flex items-center rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {eyebrow}
          </span>
          <h1
            data-hero-heading
            className="mt-6 text-4xl font-semibold tracking-tight text-balance text-primary sm:text-5xl lg:text-[3.25rem]"
          >
            {heading}
          </h1>
          <p
            data-hero-subheading
            className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty"
          >
            {subheading}
          </p>
          <div data-hero-actions className="mt-10 flex flex-wrap items-center gap-4">
            <Button render={<Link href="/contact" />} size="lg" className="h-11 px-5 text-sm" nativeButton={false}>
              {primaryCta}
              <ArrowRight data-icon="inline-end" />
            </Button>
            <Button
              render={<Link href="/services" />}
              variant="outline"
              size="lg"
              className="h-11 px-5 text-sm"
              nativeButton={false}
            >
              {secondaryCta}
            </Button>
          </div>

          <dl className="mt-16 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {stats.map((stat) => (
              <div key={stat.label} data-hero-stat>
                <dt className="text-2xl font-semibold tracking-tight text-primary sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-sm text-muted-foreground">{stat.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div data-hero-panel className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-xl shadow-primary/5 sm:p-8">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-muted-foreground">
                {panelLabel}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-0.5 text-xs font-medium text-accent-foreground">
                {panelBadge}
              </span>
            </div>
            <p className="mt-3 text-4xl font-semibold tracking-tight text-primary">
              {panelAmount}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{panelCaption}</p>

            <div className="mt-8 flex h-32 items-end gap-2">
              {chartBars.map((height, index) => (
                <div
                  key={index}
                  className="flex-1 rounded-full bg-[linear-gradient(180deg,var(--secondary),var(--brand-accent))] opacity-90"
                  style={{ height: `${height}%` }}
                />
              ))}
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
              <div className="flex -space-x-2">
                {["A", "B", "C"].map((letter) => (
                  <span
                    key={letter}
                    className="flex size-8 items-center justify-center rounded-full border-2 border-card bg-muted text-xs font-medium text-muted-foreground"
                  >
                    {letter}
                  </span>
                ))}
              </div>
              <span className="text-xs font-medium text-muted-foreground">
                {panelTeamLabel}
              </span>
            </div>
          </div>

          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-border bg-card px-4 py-3 shadow-lg sm:block">
            <div className="flex items-center gap-2">
              <span className="flex size-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <ShieldCheck className="size-4" />
              </span>
              <div>
                <p className="text-sm font-semibold text-primary">
                  {panelComplianceLabel}
                </p>
                <p className="text-xs text-muted-foreground">
                  {panelComplianceCaption}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
