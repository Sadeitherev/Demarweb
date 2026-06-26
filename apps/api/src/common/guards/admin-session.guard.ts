import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import type { Request } from 'express';

@Injectable()
export class AdminSessionGuard implements CanActivate {
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest<Request>();
    const sessionCookie = request.signedCookies?.admin_session;

    if (!sessionCookie) {
      throw new UnauthorizedException('Admin session is required');
    }

    return true;
  }
}
