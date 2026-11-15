import { useEffect, useRef, type ReactNode } from "react";

/** Content is visible by default; JS only hides elements still below the fold, then reveals them. */
export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || !("IntersectionObserver" in window)) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (el.getBoundingClientRect().top < window.innerHeight) return;
    el.setAttribute("data-pending", "true");
    const show = () => el.removeAttribute("data-pending");
    const io = new IntersectionObserver(([e]) => {
      if (e?.isIntersecting) { show(); io.disconnect(); }
    }, { threshold: 0.05 });
    io.observe(el);
    const fallback = window.setTimeout(show, 4000);
    return () => { io.disconnect(); window.clearTimeout(fallback); show(); };
  }, []);
  return <div ref={ref} className={`reveal ${className}`}>{children}</div>;
}
