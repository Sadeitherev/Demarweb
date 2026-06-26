import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { ConfigModule } from '@nestjs/config';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { envValidationSchema } from './config/env.schema';
import { HealthModule } from './health/health.module';
import { LeadsModule } from './leads/leads.module';
import { ProjectsModule } from './projects/projects.module';
import { rateLimitConfig } from './security/rate-limit.config';
import { PrismaModule } from './database/prisma.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
      validationSchema: envValidationSchema,
    }),
    ThrottlerModule.forRoot(rateLimitConfig),
    PrismaModule,
    HealthModule,
    LeadsModule,
    ProjectsModule,
  ],
  providers: [{ provide: APP_GUARD, useClass: ThrottlerGuard }],
})
export class AppModule {}
