import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UseGuards } from '@nestjs/common';
import { AdminSessionGuard } from '../common/guards/admin-session.guard';
import { UpsertProjectDto } from './project.dto';
import { ProjectsService } from './projects.service';

@Controller({ path: 'projects', version: '1' })
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @Get()
  @UseGuards(AdminSessionGuard)
  findMany() {
    return this.projectsService.findMany();
  }

  @Post()
  @UseGuards(AdminSessionGuard)
  create(@Body() dto: UpsertProjectDto) {
    return this.projectsService.create(dto);
  }

  @Patch(':id')
  @UseGuards(AdminSessionGuard)
  update(@Param('id', ParseUUIDPipe) id: string, @Body() dto: UpsertProjectDto) {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AdminSessionGuard)
  delete(@Param('id', ParseUUIDPipe) id: string) {
    return this.projectsService.delete(id);
  }
}
