import { PremiumReveal } from '@/lib/motion/premium-motion';
import { SectionShell } from '../ui/SectionShell';

const testimonials = [
  {
    name: 'Алексей Ковалев',
    text: 'ДемарАльянс взяли на себя монолитные работы и выдержали график. Понравилась прозрачность по материалам и этапам.',
    rating: 5,
  },
  {
    name: 'Екатерина Соколова',
    text: 'Строили частный дом под ключ. Команда спокойно объясняла решения, смета была понятной, коммуникация без лишнего стресса.',
    rating: 5,
  },
  {
    name: 'Дмитрий Морозов',
    text: 'Нужен был подрядчик для промышленного объекта. Получили аккуратную организацию работ и контроль качества на площадке.',
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <SectionShell id="testimonials" eyebrow="Отзывы клиентов" title="Нас рекомендуют за спокойную стройку и понятный процесс">
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <PremiumReveal key={testimonial.name} delayMs={index * 90}>
            <article className="relative min-h-72 overflow-hidden rounded-[32px] rounded-t-[52px] border border-white/10 bg-white/[0.075] p-7 shadow-glass backdrop-blur-2xl">
              <span className="pointer-events-none absolute -right-1 top-0 text-[160px] font-semibold leading-none text-white/[0.045]">“</span>
              <div className="relative z-10 flex gap-1 text-sky-200" aria-label={`${testimonial.rating} из 5`}>
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="relative z-10 mt-8 text-lg leading-relaxed text-white/75">{testimonial.text}</p>
              <strong className="relative z-10 mt-8 block text-xl font-semibold tracking-normal text-white">{testimonial.name}</strong>
            </article>
          </PremiumReveal>
        ))}
      </div>
    </SectionShell>
  );
}
