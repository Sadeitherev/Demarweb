import { Module } from '@nestjs/common';
import { PrismaModule } from '../database/prisma.module';
import { ProjectsController } from './projects.controller';
import { ProjectsRepository } from './projects.repository';
import { ProjectsService } from './projects.service';

@Module({
  imports: [PrismaModule],
  controllers: [ProjectsController],
  providers: [ProjectsRepository, ProjectsService],
})
export class ProjectsModule {}
