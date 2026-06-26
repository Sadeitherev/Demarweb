import type { CookieOptions } from 'express';

interface SecureCookieOptionsParams {
  isProduction: boolean;
  domain?: string;
}

export function createSessionCookieOptions(params: SecureCookieOptionsParams): CookieOptions {
  return {
    httpOnly: true,
    secure: params.isProduction,
    sameSite: 'lax',
    domain: params.domain,
    path: '/',
    maxAge: 1000 * 60 * 60 * 8,
  };
}

export function createCsrfCookieOptions(params: SecureCookieOptionsParams): CookieOptions {
  return {
    httpOnly: false,
    secure: params.isProduction,
    sameSite: 'lax',
    domain: params.domain,
    path: '/',
    maxAge: 1000 * 60 * 60 * 8,
  };
}
