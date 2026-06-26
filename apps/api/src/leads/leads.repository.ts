import { Injectable } from '@nestjs/common';
import type { Lead } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

interface CreateLeadRecord {
  name: string;
  phone: string;
  email?: string;
  message: string;
  ipHash: string;
  userAgent?: string;
}

@Injectable()
export class LeadsRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateLeadRecord): Promise<Lead> {
    return this.prisma.lead.create({
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        message: data.message,
        ipHash: data.ipHash,
        userAgent: data.userAgent,
      },
    });
  }
}
