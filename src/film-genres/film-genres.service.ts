import { Injectable } from '@nestjs/common';
import { CreateFilmGenreDto } from './dto/create-film-genre.dto';
import { UpdateFilmGenreDto } from './dto/update-film-genre.dto';

@Injectable()
export class FilmGenresService {
  create(createFilmGenreDto: CreateFilmGenreDto) {
    return 'This action adds a new filmGenre';
  }

  findAll() {
    return `This action returns all filmGenres`;
  }

  findOne(id: number) {
    return `This action returns a #${id} filmGenre`;
  }

  update(id: number, updateFilmGenreDto: UpdateFilmGenreDto) {
    return `This action updates a #${id} filmGenre`;
  }

  remove(id: number) {
    return `This action removes a #${id} filmGenre`;
  }
}
