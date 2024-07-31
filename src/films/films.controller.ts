import { Body, Controller, Delete, Get, Param, Patch, Post, Query } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { FilmsService } from './films.service';
import { FindFilmsByGenresDto } from './dto/find-films-by-genres.dto';

@ApiTags('Films')
@Controller('films')
export class FilmsController {
  constructor(private readonly filmsService: FilmsService) {}

  @Post()
  create(@Body() createFilmDto: CreateFilmDto) {
    return this.filmsService.create(createFilmDto);
  }

  @Get('search')
  findByTitle(@Query('title') title: string) {
    return this.filmsService.findByTitle(title);
  }

  @Get('year')
  findByYear(@Query('year') year: string) {
    return this.filmsService.findByYear(year);
  }
  @Get('genre')
  findByGenre(@Query('genre') genre: string) {
    return this.filmsService.findByGenre(genre);
  }

  @Post('/genres')
  async findByGenres(@Body() body: FindFilmsByGenresDto) {
    const { genres } = body;
    console.log(genres);
    return this.filmsService.findByGenres(genres);
  }
  @Get()
  findAll() {
    return this.filmsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.filmsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateFilmDto: UpdateFilmDto) {
    return this.filmsService.update(id, updateFilmDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.filmsService.remove(id);
  }
}
