import Joi from 'joi';

export const envValidationSchema = Joi.object({
  NODE_ENV: Joi.string().valid('development', 'test', 'production').default('development'),
  API_PORT: Joi.number().port().default(4000),
  WEB_ORIGINS: Joi.string().required(),
  COOKIE_SECRET: Joi.string().min(32).required(),
  COOKIE_DOMAIN: Joi.string().allow('').optional(),
  SESSION_SECRET: Joi.string().min(48).required(),
  CSRF_SECRET: Joi.string().min(48).required(),
  DATABASE_URL: Joi.string().uri().required(),
  DIRECT_URL: Joi.string().uri().optional(),
});
