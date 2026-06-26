import { Injectable } from '@nestjs/common';
import type { Prisma, Project } from '@prisma/client';
import { PrismaService } from '../database/prisma.service';

@Injectable()
export class ProjectsRepository {
  constructor(private readonly prisma: PrismaService) {}

  findMany(): Promise<Project[]> {
    return this.prisma.project.findMany({
      orderBy: { createdAt: 'desc' },
      include: { gallery: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  create(data: Prisma.ProjectCreateInput): Promise<Project> {
    return this.prisma.project.create({
      data,
      include: { gallery: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  update(id: string, data: Prisma.ProjectUpdateInput): Promise<Project> {
    return this.prisma.project.update({
      where: { id },
      data,
      include: { gallery: { orderBy: { sortOrder: 'asc' } } },
    });
  }

  delete(id: string): Promise<Project> {
    return this.prisma.project.delete({ where: { id } });
  }
}
