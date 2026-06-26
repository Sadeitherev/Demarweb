export function Footer() {
  return (
    <footer className="bg-demar-navy px-[clamp(20px,5vw,72px)] py-12 text-white" id="contact">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[32px] rounded-t-[56px] border border-white/10 bg-white/[0.06] p-7 shadow-glass backdrop-blur-2xl md:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.18em] text-white/55">Реквизиты</p>
          <strong className="text-3xl font-semibold tracking-normal">ООО «ДемарАльянс»</strong>
          <p className="mt-4 text-white/65">УНП: 193251626</p>
        </div>
        <address className="grid gap-3 not-italic text-white/75">
          <span>г. Минск, ул. Казинца, 11а, офис А-605</span>
          <a className="transition hover:text-white hover:[text-shadow:0_0_18px_rgba(125,211,252,.55)] focus-visible:outline-none focus-visible:[text-shadow:0_0_18px_rgba(125,211,252,.65)]" href="tel:+375173004293">+375 (17) 300-42-93</a>
          <a className="transition hover:text-white hover:[text-shadow:0_0_18px_rgba(125,211,252,.55)] focus-visible:outline-none focus-visible:[text-shadow:0_0_18px_rgba(125,211,252,.65)]" href="tel:+375296779505">+375 (29) 677-95-05</a>
          <a className="transition hover:text-white hover:[text-shadow:0_0_18px_rgba(125,211,252,.55)] focus-visible:outline-none focus-visible:[text-shadow:0_0_18px_rgba(125,211,252,.65)]" href="mailto:info@demaralyans.by">info@demaralyans.by</a>
        </address>
      </div>
    </footer>
  );
}
