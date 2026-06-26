'use client';

import { useState } from 'react';
import { leadInputSchema, type LeadInput } from '@demar/validation';
import { PremiumReveal } from '@/lib/motion/premium-motion';
import { SectionShell } from '../ui/SectionShell';

const slabTypes = [
  { id: 'wood', label: 'Деревянные', multiplier: 1 },
  { id: 'mono', label: 'Монолитные', multiplier: 1.22 },
  { id: 'panel', label: 'Ж/б плиты', multiplier: 1.14 },
] as const;

type SlabType = (typeof slabTypes)[number]['id'];

export function CostCalculatorSection() {
  const [area, setArea] = useState(140);
  const [floors, setFloors] = useState(2);
  const [slabType, setSlabType] = useState<SlabType>('mono');
  const [form, setForm] = useState({ name: '', phone: '' });
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const selected = slabTypes.find((type) => type.id === slabType) ?? slabTypes[1];
  const baseRate = 980;
  const floorMultiplier = floors === 1 ? 1 : 1 + (floors - 1) * 0.12;
  const estimatedCost = Math.round(area * baseRate * floorMultiplier * selected.multiplier);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const message = `Запрос сметы: площадь ${area} м², этажность ${floors}, перекрытия: ${selected.label}, ориентир ${estimatedCost.toLocaleString('ru-RU')} BYN.`;
    const parsed = leadInputSchema.safeParse({
      name: form.name,
      phone: form.phone,
      message,
    });

    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Проверьте данные формы');
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data satisfies LeadInput),
      });

      if (!response.ok) {
        setError('Не удалось отправить расчет. Попробуйте позже.');
        return;
      }

      setSuccess('Расчет отправлен. Мы уточним детали и подготовим смету.');
      setForm({ name: '', phone: '' });
    } catch {
      setError('Сервис заявок временно недоступен. Позвоните нам или попробуйте позже.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <SectionShell
      id="calculator"
      eyebrow="Калькулятор"
      title="Предварительная стоимость строительства"
      description="Расчет дает ориентир по бюджету. Финальная смета формируется после анализа проекта, грунтов, материалов и инженерных решений."
    >
      <PremiumReveal className="mt-10">
        <div className="grid gap-6 rounded-[36px] rounded-t-[60px] border border-sky-200/15 bg-white/[0.075] p-5 shadow-glass backdrop-blur-2xl lg:grid-cols-[1.1fr_.9fr] lg:p-8">
          <div className="space-y-8">
            <RangeField label="Площадь" value={area} min={60} max={500} suffix="м²" onChange={setArea} />
            <RangeField label="Этажность" value={floors} min={1} max={4} suffix="этажа" onChange={setFloors} />

            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/55">Тип перекрытий</p>
              <div className="grid gap-3 sm:grid-cols-3">
                {slabTypes.map((type) => (
                  <button
                    key={type.id}
                    type="button"
                    onClick={() => setSlabType(type.id)}
                    className={`rounded-2xl border px-4 py-4 text-sm font-semibold tracking-normal transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-sky-300/25 ${
                      slabType === type.id
                        ? 'border-sky-300/60 bg-sky-300/20 text-white shadow-[0_0_32px_rgba(56,189,248,.18)]'
                        : 'border-white/10 bg-white/5 text-white/70 hover:border-sky-300/40 hover:text-white'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-[30px] rounded-t-[48px] border border-white/10 bg-demar-navy/70 p-6 shadow-premium">
            <p className="text-sm font-medium uppercase tracking-[0.18em] text-demar-steel">Ориентировочно</p>
            <strong className="mt-4 block text-[clamp(42px,6vw,72px)] font-semibold leading-tight tracking-normal">
              {estimatedCost.toLocaleString('ru-RU')} BYN
            </strong>
            <p className="mt-4 text-sm leading-relaxed text-white/60">Формула: площадь × базовая ставка × коэффициент этажности × тип перекрытий.</p>

            <form className="mt-7 grid gap-3" aria-label="Получить смету" onSubmit={handleSubmit}>
              <input
                className="h-14 rounded-2xl border border-sky-200/15 bg-white/90 px-4 text-demar-navy outline-none transition placeholder:text-slate-500 focus:border-sky-300 focus:shadow-[0_0_0_4px_rgba(56,189,248,.22)]"
                placeholder="Имя"
                autoComplete="name"
                value={form.name}
                onChange={(event) => setForm((current) => ({ ...current, name: event.target.value }))}
              />
              <input
                className="h-14 rounded-2xl border border-sky-200/15 bg-white/90 px-4 text-demar-navy outline-none transition placeholder:text-slate-500 focus:border-sky-300 focus:shadow-[0_0_0_4px_rgba(56,189,248,.22)]"
                placeholder="Телефон"
                autoComplete="tel"
                inputMode="tel"
                value={form.phone}
                onChange={(event) => setForm((current) => ({ ...current, phone: event.target.value }))}
              />
              <button className="h-14 rounded-full bg-white px-6 text-sm font-semibold tracking-normal text-demar-navy transition hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(255,255,255,.18)] focus-visible:outline-none focus-visible:shadow-[0_0_0_4px_rgba(56,189,248,.24)] disabled:cursor-not-allowed disabled:opacity-60" type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Отправляем...' : 'Получить смету'}
              </button>
              {error ? <p className="text-sm font-semibold text-red-200">{error}</p> : null}
              {success ? <p className="text-sm font-semibold text-emerald-200">{success}</p> : null}
            </form>
          </div>
        </div>
      </PremiumReveal>
    </SectionShell>
  );
}

interface RangeFieldProps {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
}

function RangeField(props: RangeFieldProps) {
  return (
    <label className="block">
      <span className="mb-3 flex items-end justify-between gap-4">
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-white/55">{props.label}</span>
        <strong className="text-2xl font-semibold tracking-normal text-white">{props.value} {props.suffix}</strong>
      </span>
      <input
        className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/15 accent-sky-300"
        type="range"
        min={props.min}
        max={props.max}
        value={props.value}
        onChange={(event) => props.onChange(Number(event.target.value))}
      />
    </label>
  );
}
