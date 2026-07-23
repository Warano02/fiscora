"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

type CounterProps = {
  value: number;
  suffix?: string;
  className?: string;
};

export function Counter({ value, suffix = "", className }: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const counter = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 85%",
          once: true,
        },
        onUpdate: () => {
          el.textContent = `${Math.round(counter.value)}${suffix}`;
        },
      });
    });

    return () => ctx.revert();
  }, [value, suffix]);

  return (
    <span ref={ref} className={className}>
      0{suffix}
    </span>
  );
}
