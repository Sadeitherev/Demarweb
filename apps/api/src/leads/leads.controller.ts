import { Body, Controller, HttpCode, HttpStatus, Post, Req } from '@nestjs/common';
import { Throttle } from '@nestjs/throttler';
import type { Request } from 'express';
import { CreateLeadDto } from './create-lead.dto';
import type { LeadResponseDto } from './lead-response.dto';
import { LeadsService } from './leads.service';

@Controller({ path: 'leads', version: '1' })
export class LeadsController {
  constructor(private readonly leadsService: LeadsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @Throttle({ lead: { ttl: 60_000, limit: 3 } })
  async create(
    @Body() dto: CreateLeadDto,
    @Req() request: Request,
  ): Promise<LeadResponseDto> {
    const lead = await this.leadsService.create(dto, {
      ipAddress: request.ip ?? request.socket.remoteAddress ?? 'unknown',
      userAgent: request.headers['user-agent'],
    });

    return {
      id: lead.id,
      status: 'NEW',
      createdAt: lead.createdAt.toISOString(),
    };
  }
}
