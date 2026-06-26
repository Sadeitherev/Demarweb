import Image from 'next/image';
import Link from 'next/link';
import {
  PremiumBackground,
  PremiumMagnetic,
  PremiumReveal,
} from '@/lib/motion/premium-motion';
import { LeadForm } from './LeadForm';

export function HeroSection() {
  return (
    <section className="min-h-svh overflow-hidden bg-demar-navy text-white" aria-labelledby="hero-title">
      <PremiumBackground className="relative grid min-h-svh place-items-center px-[clamp(20px,5vw,72px)] pb-20 pt-36 max-lg:pt-56">
        <div className="pointer-events-none absolute inset-0 bg-steel-grid bg-[length:72px_72px] opacity-20 [mask-image:radial-gradient(circle_at_center,#000_0%,transparent_72%)]" />
        <div className="pointer-events-none absolute -left-[18%] top-[18%] h-28 w-[46vw] -rotate-[18deg] border border-white/10 bg-gradient-to-r from-demar-steel/5 via-white/15 to-demar-blue/10 shadow-inner" />
        <div className="pointer-events-none absolute -right-[20%] bottom-[18%] h-28 w-[46vw] -rotate-[18deg] border border-white/10 bg-gradient-to-r from-demar-steel/5 via-white/15 to-demar-blue/10 shadow-inner" />

        <div className="relative z-10 w-full max-w-5xl text-center">
          <PremiumReveal className="relative mx-auto mb-8 grid h-64 w-64 place-items-center rounded-[44px] border border-white/15 bg-white/10 shadow-premium backdrop-blur-2xl before:absolute before:inset-[-2px] before:-z-10 before:rounded-[inherit] before:bg-gradient-to-br before:from-white before:via-demar-steel before:to-demar-blue before:opacity-60 before:blur-xl max-md:h-48 max-md:w-48 max-md:rounded-[34px]">
            <Image
              className="h-auto w-[72%] drop-shadow-2xl"
              src="/logo.png"
              alt="Логотип Демар Альянс"
              width={260}
              height={260}
              priority
            />
          </PremiumReveal>
          <PremiumReveal delayMs={160}>
            <p className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-demar-frost/80 md:text-sm">Проектирование · строительство · инженерия</p>
          </PremiumReveal>
          <PremiumReveal delayMs={260}>
            <h1 className="mx-auto max-w-5xl text-[clamp(44px,7vw,96px)] font-semibold leading-[0.96] tracking-normal" id="hero-title">
              Строим надежные объекты с инженерной точностью
            </h1>
          </PremiumReveal>
          <PremiumReveal delayMs={380}>
            <p className="mx-auto mt-7 max-w-3xl text-[clamp(17px,2vw,22px)] leading-relaxed text-white/75">
              «Демар Альянс» реализует современные строительные проекты с акцентом на
              качество, сроки, безопасность и прозрачное управление процессом.
            </p>
          </PremiumReveal>
          <PremiumReveal className="mt-10 flex justify-center gap-4 max-md:flex-col" delayMs={500}>
            <PremiumMagnetic>
              <Link className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-7 text-sm font-semibold tracking-normal text-demar-navy shadow-[0_20px_56px_rgba(255,255,255,.2)] transition hover:-translate-y-1 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(56,189,248,.28)]" href="#contact">
                Обсудить проект
              </Link>
            </PremiumMagnetic>
            <Link className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/20 bg-white/10 px-7 text-sm font-semibold tracking-normal text-white backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15 focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(56,189,248,.24)]" href="#services">
              Смотреть работы
            </Link>
          </PremiumReveal>

          <PremiumReveal className="mx-auto mt-12 max-w-3xl" delayMs={620}>
            <LeadForm />
          </PremiumReveal>
        </div>
      </PremiumBackground>
    </section>
  );
}
