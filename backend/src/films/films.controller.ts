import { Controller, Get, Param } from '@nestjs/common';
import { FilmsService } from './films.service';
import { FilmDto } from './dto/films.dto';

@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Get()
  async findAll(): Promise<{ total: number; items: FilmDto[] }> {
    const items = await this.filmsService.findAll();
    return { total: items.length, items };
  }

  @Get(':id/schedule')
  async getSchedule(@Param('id') id: string) {
    const items = await this.filmsService.findById(id);
    return { total: items.length, items };
  }
}
