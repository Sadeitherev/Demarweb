import { ConfigService } from '@nestjs/config';
import type { HelmetOptions } from 'helmet';

export function createHelmetOptions(config: ConfigService): HelmetOptions {
  const webOrigins = config
    .getOrThrow<string>('WEB_ORIGINS')
    .split(',')
    .map((origin) => origin.trim());

  return {
    hidePoweredBy: true,
    noSniff: true,
    frameguard: { action: 'deny' },
    referrerPolicy: { policy: 'strict-origin-when-cross-origin' },
    crossOriginEmbedderPolicy: false,
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        baseUri: ["'self'"],
        objectSrc: ["'none'"],
        frameAncestors: ["'none'"],
        scriptSrc: ["'self'"],
        styleSrc: ["'self'", "'unsafe-inline'"],
        imgSrc: ["'self'", 'data:', 'https:'],
        fontSrc: ["'self'", 'data:'],
        connectSrc: ["'self'", ...webOrigins],
        formAction: ["'self'"],
        upgradeInsecureRequests: config.get<string>('NODE_ENV') === 'production' ? [] : null,
      },
    },
    hsts:
      config.get<string>('NODE_ENV') === 'production'
        ? { maxAge: 31536000, includeSubDomains: true, preload: true }
        : false,
  };
}
