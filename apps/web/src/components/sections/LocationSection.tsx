import { PremiumReveal } from '@/lib/motion/premium-motion';
import { SectionShell } from '../ui/SectionShell';

export function LocationSection() {
  return (
    <SectionShell
      id="location"
      eyebrow="Как нас найти"
      title="Офис в Минске"
      description="ООО «ДемарАльянс», г. Минск, ул. Казинца, 11а, офис А-605."
    >
      <PremiumReveal className="mt-10">
        <div className="overflow-hidden rounded-[36px] rounded-t-[60px] border border-white/10 bg-white/[0.075] p-3 shadow-glass backdrop-blur-2xl">
          <iframe
            className="h-[420px] w-full rounded-[28px] border-0 grayscale-[.15] invert-0"
            title="Карта: ДемарАльянс, Минск, Казинца 11а"
            src="https://yandex.by/map-widget/v1/?ll=27.532998%2C53.847987&z=16&text=%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%2C%20%D1%83%D0%BB.%20%D0%9A%D0%B0%D0%B7%D0%B8%D0%BD%D1%86%D0%B0%2C%2011%D0%B0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </PremiumReveal>
    </SectionShell>
  );
}
