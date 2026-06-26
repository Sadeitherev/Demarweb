import { z } from 'zod';

const phoneSchema = z
  .string()
  .trim()
  .min(7, 'Введите корректный телефон')
  .max(40, 'Телефон слишком длинный')
  .regex(/^[+()\d\s.-]+$/, 'Телефон может содержать только цифры и служебные символы');

const emailSchema = z
  .string()
  .trim()
  .email('Введите корректный email')
  .max(254, 'Email слишком длинный');

export const leadInputSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Имя должно содержать минимум 2 символа')
    .max(120, 'Имя слишком длинное')
    .refine((value) => !/[<>]/.test(value), 'Имя содержит недопустимые символы'),
  phone: phoneSchema,
  email: z.union([emailSchema, z.literal('')]).optional().transform((value) => {
    if (value === '' || value === undefined) {
      return undefined;
    }

    return value;
  }),
  message: z
    .string()
    .trim()
    .min(10, 'Сообщение должно содержать минимум 10 символов')
    .max(2000, 'Сообщение слишком длинное')
    .refine((value) => !/[<>]/.test(value), 'Сообщение содержит недопустимые символы'),
});

export type LeadInput = z.infer<typeof leadInputSchema>;
