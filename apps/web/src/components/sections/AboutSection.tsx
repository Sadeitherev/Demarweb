import { BadgeCheck, Banknote, CalendarCheck, ClipboardList, HardHat, ShieldCheck } from 'lucide-react';
import { PremiumReveal } from '@/lib/motion/premium-motion';
import { SectionShell } from '../ui/SectionShell';

const advantages = [
  { title: '7 лет на рынке РБ', text: 'Работаем с частными, коммерческими и промышленными объектами в Беларуси.', icon: BadgeCheck, featured: true },
  { title: 'Финансовая надежность', text: 'Планируем бюджет прозрачно и бережно относимся к ресурсам заказчика.', icon: Banknote },
  { title: 'Прозрачные сметы', text: 'Расписываем этапы, материалы, сроки и стоимость без скрытых пунктов.', icon: ClipboardList },
  { title: 'Соблюдение сроков', text: 'Ведем стройку по понятному графику и контролируем критические этапы.', icon: CalendarCheck },
  { title: 'Инженерный подход', text: 'Учитываем конструктив, грунты, нагрузки, логистику и эксплуатацию здания.', icon: HardHat },
  { title: 'Ответственный подрядчик', text: 'Берем на себя организацию работ и координацию смежных специалистов.', icon: ShieldCheck },
];

export function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="О компании ДемарАльянс"
      title="Надежный строительный партнер для сложных и ответственных объектов"
      description="Мы объединяем практический опыт, точные сметы и аккуратное управление стройкой, чтобы заказчик видел результат, сроки и бюджет без хаоса."
    >
      <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
        {advantages.map((item, index) => (
          <PremiumReveal key={item.title} delayMs={index * 70} className={item.featured ? 'md:row-span-2' : ''}>
            <article className={`group flex h-full min-h-[210px] flex-col justify-start gap-4 rounded-[32px] rounded-t-[52px] border border-white/10 bg-white/[0.075] p-6 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:border-sky-300/35 hover:bg-sky-400/10 ${item.featured ? 'md:min-h-[436px] md:p-8' : ''}`}>
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-sky-200/15 bg-sky-300/10 text-sky-200 transition group-hover:border-sky-200/35 group-hover:bg-sky-300/15">
                <item.icon className="h-8 w-8" strokeWidth={1.65} />
              </span>
              <h3 className={`${item.featured ? 'text-[clamp(30px,4vw,48px)]' : 'text-xl md:text-2xl'} break-words hyphens-auto font-semibold leading-tight tracking-normal text-white`} lang="ru">
                {item.title}
              </h3>
              <p className={`${item.featured ? 'max-w-sm text-lg' : 'text-sm md:text-base'} font-normal leading-relaxed text-white/70`}>
                {item.text}
              </p>
            </article>
          </PremiumReveal>
        ))}
      </div>
    </SectionShell>
  );
}
