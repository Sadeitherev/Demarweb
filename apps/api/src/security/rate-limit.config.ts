import type { ThrottlerModuleOptions } from '@nestjs/throttler';

export const rateLimitConfig: ThrottlerModuleOptions = [
  { name: 'default', ttl: 60_000, limit: 120 },
  { name: 'auth', ttl: 60_000, limit: 5 },
  { name: 'lead', ttl: 60_000, limit: 3 },
];
