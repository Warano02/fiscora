"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight, Menu } from "lucide-react";
import { gsap } from "gsap";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { project } from "@/const/project";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Logo } from "@/components/layout/logo";
import { LocaleSwitcher } from "@/components/layout/locale-switcher";

export function Header() {
  const t = useTranslations("Nav");
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!headerRef.current) return;
    gsap.from(headerRef.current, {
      y: -24,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navItems = project.nav.main;

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        isScrolled
          ? "border-border bg-background/80 shadow-sm backdrop-blur-md"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Main">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.slug}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "text-sm font-medium transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-primary"
                )}
              >
                {t(item.slug)}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <LocaleSwitcher />
          <Button render={<Link href="/contact" />} size="lg" nativeButton={false}>
            {t("getStarted")}
            <ArrowRight data-icon="inline-end" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LocaleSwitcher />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger render={<Button variant="ghost" size="icon" />}>
              <Menu />
              <span className="sr-only">Menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="flex w-full sm:max-w-sm">
              <SheetHeader>
                <SheetTitle className="sr-only">Menu</SheetTitle>
              </SheetHeader>
              <nav
                className="flex flex-1 flex-col gap-1 px-4"
                aria-label="Mobile"
              >
                {navItems.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.slug}
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={cn(
                        "rounded-lg px-3 py-2.5 text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-primary"
                          : "text-muted-foreground hover:bg-muted hover:text-primary"
                      )}
                    >
                      {t(item.slug)}
                    </Link>
                  );
                })}
              </nav>
              <div className="mt-auto flex flex-col gap-3 p-4">
                <Button render={<Link href="/contact" />} size="lg">
                  {t("getStarted")}
                  <ArrowRight data-icon="inline-end" />
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
