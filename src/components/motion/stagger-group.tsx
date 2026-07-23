"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type StaggerGroupProps = {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  animate?: boolean;
};

export function StaggerGroup({
  children,
  className,
  stagger = 0.12,
  animate = true,
}: StaggerGroupProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animate) return;

    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.set(el.children, { y: 0, opacity: 1 });

      gsap.from(el.children, {
        y: 24,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        stagger,
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
      });
    });

    return () => ctx.revert();
  }, [animate, stagger]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
