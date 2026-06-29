# Demar Alyans Website

Monorepo for the Demar Alyans marketing website and API.

## Stack

- Next.js web app in `apps/web`
- NestJS API in `apps/api`
- Prisma schema and database helpers in `packages/db`
- Shared validation schemas in `packages/validation`
- npm workspaces with TurboRepo

## Setup

```powershell
npm install
Copy-Item .env.example .env
```

Update `.env` with real secrets before running the API. Do not commit `.env`.

## Database

Start PostgreSQL:

```powershell
docker compose --env-file .env -f infra/docker-compose.yml up -d
```

Generate Prisma client and run migrations:

```powershell
npm run db:generate
npm run db:migrate
```

## Development

Run API:

```powershell
npm run dev:api
```

Run web on port `3000`:

```powershell
npm run dev:web
```

The web app proxies `/api/*` to `API_ORIGIN`, which defaults to `http://localhost:4000`.

## Verification

Build web:

```powershell
npm run build --workspace web
```

Build API:

```powershell
npm run build --workspace api
```

Before showing the project, verify:

- `npm run build --workspace web` passes
- `npm run build --workspace api` passes
- PostgreSQL is running
- API starts on `API_PORT`
- Web starts on port `3000`
- Lead form submits to `/api/v1/leads`

## Security Notes

- Keep `.env` out of Git.
- Use strong values for `COOKIE_SECRET`, `SESSION_SECRET`, `CSRF_SECRET`, and database passwords.
- Configure production HTTPS, HSTS, CSP, and rate limiting at the reverse proxy.
- Restrict `WEB_ORIGINS` to real production domains.
- Run dependency checks before deployment.
