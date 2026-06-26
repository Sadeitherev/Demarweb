import { Injectable } from '@nestjs/common';
import type { UpsertProjectDto } from './project.dto';
import { ProjectsRepository } from './projects.repository';

@Injectable()
export class ProjectsService {
  constructor(private readonly projectsRepository: ProjectsRepository) {}

  findMany() {
    return this.projectsRepository.findMany();
  }

  create(dto: UpsertProjectDto) {
    return this.projectsRepository.create({
      slug: dto.slug,
      title: dto.title,
      description: dto.description,
      status: dto.status,
      location: dto.location,
      deliveryAt: dto.deliveryAt ? new Date(dto.deliveryAt) : undefined,
      isPublished: dto.isPublished,
      gallery: {
        create: dto.gallery.map((image) => ({
          url: image.url,
          alt: image.alt,
          sortOrder: image.sortOrder,
        })),
      },
    });
  }

  update(id: string, dto: UpsertProjectDto) {
    return this.projectsRepository.update(id, {
      slug: dto.slug,
      title: dto.title,
      description: dto.description,
      status: dto.status,
      location: dto.location,
      deliveryAt: dto.deliveryAt ? new Date(dto.deliveryAt) : null,
      isPublished: dto.isPublished,
      gallery: {
        deleteMany: {},
        create: dto.gallery.map((image) => ({
          url: image.url,
          alt: image.alt,
          sortOrder: image.sortOrder,
        })),
      },
    });
  }

  delete(id: string) {
    return this.projectsRepository.delete(id);
  }
}
