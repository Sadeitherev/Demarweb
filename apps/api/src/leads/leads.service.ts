import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createHmac } from 'crypto';
import type { CreateLeadDto } from './create-lead.dto';
import { LeadsRepository } from './leads.repository';

interface CreateLeadMetadata {
  ipAddress: string;
  userAgent?: string;
}

@Injectable()
export class LeadsService {
  constructor(
    private readonly leadsRepository: LeadsRepository,
    private readonly config: ConfigService,
  ) {}

  async create(dto: CreateLeadDto, metadata: CreateLeadMetadata) {
    const secret = this.config.getOrThrow<string>('CSRF_SECRET');
    const ipHash = createHmac('sha256', secret).update(metadata.ipAddress).digest('hex');

    const lead = await this.leadsRepository.create({
      name: normalizeText(dto.name, 120),
      phone: normalizeText(dto.phone, 40),
      email: dto.email ? normalizeText(dto.email, 254) : undefined,
      message: normalizeText(dto.message, 2000),
      ipHash,
      userAgent: metadata.userAgent ? normalizeText(metadata.userAgent, 512) : undefined,
    });

    return lead;
  }
}

function normalizeText(value: string, maxLength: number): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}
