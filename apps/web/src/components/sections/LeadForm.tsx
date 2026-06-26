'use client';

import { useState, useTransition } from 'react';
import { leadInputSchema, type LeadInput } from '@demar/validation';

interface LeadFormState {
  name: string;
  phone: string;
  email: string;
  message: string;
}

const initialState: LeadFormState = {
  name: '',
  phone: '',
  email: '',
  message: '',
};

export function LeadForm() {
  const [form, setForm] = useState<LeadFormState>(initialState);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  const canSubmit = form.name.trim() && form.phone.trim() && form.message.trim();

  function updateField(field: keyof LeadFormState, value: string): void {
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    setError(null);
    setSuccess(null);

    const parsed = leadInputSchema.safeParse(form);
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? 'Проверьте данные формы');
      return;
    }

    let response: Response;
    try {
      response = await fetch('/api/v1/leads', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(parsed.data satisfies LeadInput),
      });
    } catch {
      setError('Сервис заявок временно недоступен. Позвоните нам или попробуйте позже.');
      return;
    }

    if (!response.ok) {
      setError('Не удалось отправить заявку. Попробуйте позже.');
      return;
    }

    startTransition(() => {
      setSuccess('Заявка отправлена. Мы свяжемся с вами в ближайшее время.');
      setForm(initialState);
    });
  }

  return (
    <form className="grid gap-4 rounded-[32px] border border-white/15 bg-white/10 p-5 text-left shadow-glass backdrop-blur-2xl md:grid-cols-2 md:p-6" onSubmit={handleSubmit} aria-label="Форма заявки">
      <input
        className="h-14 rounded-2xl border border-white/10 bg-white/90 px-4 text-demar-navy outline-none ring-white/30 transition placeholder:text-slate-500 focus:ring-4"
        value={form.name}
        onChange={(event) => updateField('name', event.target.value)}
        placeholder="Имя"
        autoComplete="name"
      />
      <input
        className="h-14 rounded-2xl border border-white/10 bg-white/90 px-4 text-demar-navy outline-none ring-white/30 transition placeholder:text-slate-500 focus:ring-4"
        value={form.phone}
        onChange={(event) => updateField('phone', event.target.value)}
        placeholder="Телефон"
        autoComplete="tel"
        inputMode="tel"
      />
      <input
        className="h-14 rounded-2xl border border-white/10 bg-white/90 px-4 text-demar-navy outline-none ring-white/30 transition placeholder:text-slate-500 focus:ring-4 md:col-span-2"
        value={form.email}
        onChange={(event) => updateField('email', event.target.value)}
        placeholder="Email"
        autoComplete="email"
        inputMode="email"
      />
      <textarea
        className="min-h-32 resize-y rounded-2xl border border-white/10 bg-white/90 px-4 py-4 text-demar-navy outline-none ring-white/30 transition placeholder:text-slate-500 focus:ring-4 md:col-span-2"
        value={form.message}
        onChange={(event) => updateField('message', event.target.value)}
        placeholder="Опишите ваш проект"
        rows={5}
      />
      <button className="h-14 rounded-full bg-white px-7 text-sm font-semibold tracking-normal text-demar-navy transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-50 md:col-span-2" type="submit" disabled={!canSubmit || isPending}>
        {isPending ? 'Отправка...' : 'Отправить заявку'}
      </button>
      {error ? <p className="text-sm font-semibold text-red-200 md:col-span-2">{error}</p> : null}
      {success ? <p className="text-sm font-semibold text-emerald-200 md:col-span-2">{success}</p> : null}
    </form>
  );
}
