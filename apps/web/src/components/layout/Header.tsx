import Link from 'next/link';

const phone = '8 (017) 300 42 93';
const email = 'info@demaralyans.by';

export function Header() {
  return (
    <header className="fixed left-1/2 top-5 z-50 grid w-[min(1180px,calc(100%-32px))] -translate-x-1/2 grid-cols-[auto_1fr_auto] items-center gap-7 rounded-full border border-white/15 bg-demar-navy/70 px-5 py-4 shadow-glass backdrop-blur-2xl max-lg:grid-cols-1 max-lg:rounded-[28px]">
      <Link className="text-sm font-semibold uppercase tracking-[0.18em] text-white" href="/" aria-label="Демар Альянс">
        Демар Альянс
      </Link>
      <nav className="flex justify-center gap-5 text-sm font-semibold text-white/75 max-lg:order-3 max-lg:flex-wrap" aria-label="Главная навигация">
        <Link className="rounded-full px-2 py-1 transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none focus-visible:[text-shadow:0_0_16px_rgba(125,211,252,.75)]" href="#services">Услуги</Link>
        <Link className="rounded-full px-2 py-1 transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none focus-visible:[text-shadow:0_0_16px_rgba(125,211,252,.75)]" href="#calculator">Калькулятор</Link>
        <Link className="rounded-full px-2 py-1 transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none focus-visible:[text-shadow:0_0_16px_rgba(125,211,252,.75)]" href="#about">О компании</Link>
        <Link className="rounded-full px-2 py-1 transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none focus-visible:[text-shadow:0_0_16px_rgba(125,211,252,.75)]" href="#location">Контакты</Link>
      </nav>
      <div className="flex items-center gap-4 text-sm font-semibold text-white/80 max-lg:flex-wrap max-lg:justify-between" aria-label="Контактные данные">
        <a className="transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none" href="tel:+375173004293">{phone}</a>
        <a className="transition hover:text-white hover:[text-shadow:0_0_16px_rgba(125,211,252,.65)] focus-visible:outline-none" href={`mailto:${email}`}>{email}</a>
      </div>
    </header>
  );
}
