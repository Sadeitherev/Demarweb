import Link from 'next/link';

const phone = '8 (017) 300 42 93';
const email = 'info@demaralyans.by';

export function Header() {
  const linkClassName = 'whitespace-nowrap rounded-full px-2 py-1 transition-colors duration-200 hover:text-gray-300 focus-visible:outline-none focus-visible:text-gray-300';
  const contactClassName = 'whitespace-nowrap transition-colors duration-200 hover:text-gray-300 focus-visible:outline-none focus-visible:text-gray-300';

  return (
    <header className="z-50 mx-auto mt-5 grid w-[min(1180px,calc(100%-32px))] grid-cols-[auto_1fr_auto] items-center gap-4 rounded-full border border-white/15 bg-demar-navy/70 px-4 py-3 shadow-glass backdrop-blur-2xl lg:fixed lg:left-1/2 lg:top-5 lg:mt-0 lg:-translate-x-1/2 max-lg:grid-cols-1 max-lg:rounded-[28px]">
      <Link className="whitespace-nowrap text-sm font-semibold uppercase tracking-[0.18em] text-white" href="/" aria-label="Демар Альянс">
        Демар Альянс
      </Link>
      <nav className="flex items-center justify-center gap-4 text-sm font-semibold text-white/75 max-lg:order-3 max-lg:flex-wrap max-lg:gap-3" aria-label="Главная навигация">
        <Link className={linkClassName} href="/#services">Услуги</Link>
        <Link className={linkClassName} href="/#calculator">Калькулятор</Link>
        <Link className={linkClassName} href="/#about">О компании</Link>
        <Link className={linkClassName} href="/#location">Контакты</Link>
        <Link className={linkClassName} href="/privacy-policy">Политика конфиденциальности</Link>
      </nav>
      <div className="flex items-center gap-3 text-sm font-semibold text-white/80 max-lg:flex-wrap max-lg:justify-between" aria-label="Контактные данные">
        <a className={contactClassName} href="tel:+375173004293">{phone}</a>
        <a className={`${contactClassName} hidden xl:block`} href={`mailto:${email}`}>{email}</a>
      </div>
    </header>
  );
}
