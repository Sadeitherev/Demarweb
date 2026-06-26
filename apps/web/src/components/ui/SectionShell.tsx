import type { ReactNode } from 'react';
import { PremiumReveal } from '@/lib/motion/premium-motion';

interface SectionShellProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  children: ReactNode;
}

export function SectionShell(props: SectionShellProps) {
  return (
    <section id={props.id} className="relative bg-demar-navy px-[clamp(20px,5vw,72px)] py-20 text-white">
      <div className="mx-auto max-w-7xl">
        <PremiumReveal>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-demar-steel">{props.eyebrow}</p>
          <h2 className="max-w-4xl text-[clamp(34px,5vw,68px)] font-semibold leading-tight tracking-normal">{props.title}</h2>
          {props.description ? <p className="mt-6 max-w-3xl text-lg font-normal leading-relaxed text-white/70">{props.description}</p> : null}
        </PremiumReveal>
        {props.children}
      </div>
    </section>
  );
}
