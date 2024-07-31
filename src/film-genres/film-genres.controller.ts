import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFilmGenreDto } from './dto/create-film-genre.dto';
import { UpdateFilmGenreDto } from './dto/update-film-genre.dto';
import { FilmGenresService } from './film-genres.service';

@ApiTags('Films-Genres')
@Controller('film-genres')
export class FilmGenresController {
  constructor(private readonly filmGenresService: FilmGenresService) {}

  @Post()
  create(@Body() createFilmGenreDto: CreateFilmGenreDto) {
    return this.filmGenresService.create(createFilmGenreDto);
  }

  @Get()
  findAll() {
    return this.filmGenresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmGenresService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmGenreDto: UpdateFilmGenreDto) {
    return this.filmGenresService.update(id, updateFilmGenreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmGenresService.remove(id);
  }
}
