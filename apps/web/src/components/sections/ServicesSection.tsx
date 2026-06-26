import { PremiumReveal } from '@/lib/motion/premium-motion';
import { SectionShell } from '../ui/SectionShell';

const services = [
  {
    title: 'Монолитные каркасы и здания',
    description: 'Возводим несущие конструкции с контролем геометрии, прочности и сроков на каждом этапе.',
  },
  {
    title: 'Частные дома под ключ',
    description: 'Берем на себя строительство дома от подготовительных работ до готового контура объекта.',
  },
  {
    title: 'Общестроительные и подрядные работы',
    description: 'Организуем комплексные работы на площадке и координируем смежных специалистов.',
  },
  {
    title: 'Фундаменты любых типов',
    description: 'Подбираем решение под грунты, нагрузки и конструктив будущего здания.',
  },
  {
    title: 'Промышленные объекты',
    description: 'Строим объекты с учетом технологических требований, безопасности и эксплуатационных нагрузок.',
  },
  {
    title: 'Проектирование и сметы',
    description: 'Готовим понятную документацию, бюджет и последовательность работ до старта стройки.',
  },
];

export function ServicesSection() {
  return (
    <SectionShell
      id="services"
      eyebrow="ОКЭД 41200"
      title="Наши услуги"
      description="Капитальное строительство и монолитные работы: от проектирования и смет до реализации частных, коммерческих и промышленных объектов."
    >
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <PremiumReveal key={service.title} delayMs={index * 80}>
            <article className="group min-h-56 rounded-[32px] rounded-t-[48px] border border-white/10 bg-white/[0.075] p-7 shadow-glass backdrop-blur-2xl transition duration-300 hover:-translate-y-2 hover:border-sky-300/40 hover:bg-sky-400/10 hover:shadow-[0_30px_90px_rgba(56,189,248,.18)]">
              <span className="mb-8 inline-grid h-11 w-11 place-items-center rounded-2xl bg-white/10 text-sm font-medium text-sky-100 ring-1 ring-white/10">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="text-2xl font-semibold leading-snug tracking-normal text-white">{service.title}</h3>
              <p className="mt-4 text-base font-normal leading-relaxed tracking-normal text-white/70">{service.description}</p>
              <div className="mt-6 h-px w-16 bg-gradient-to-r from-sky-300 to-transparent transition-all duration-300 group-hover:w-28" />
            </article>
          </PremiumReveal>
        ))}
      </div>
    </SectionShell>
  );
}
