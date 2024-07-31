import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmGenreDto } from './dto/create-film-genre.dto';
import { UpdateFilmGenreDto } from './dto/update-film-genre.dto';
import { FilmGenre } from './entities/film-genre.entity';

@Injectable()
export class FilmGenresService {
  constructor(
    @InjectRepository(FilmGenre)
    private readonly filmGenreRepository: Repository<FilmGenre>,
  ) {}
  async create(createFilmGenreDto: CreateFilmGenreDto): Promise<FilmGenre> {
    return await this.filmGenreRepository.save(createFilmGenreDto);
  }

  findAll() {
    return this.filmGenreRepository.find({
      relations: [],
    });
  }

  async findOne(id: string) {
    return await this.filmGenreRepository.findOne({
      where: { id: id },
      relations: [],
    });
  }

  update(id: string, updateFilmGenreDto: UpdateFilmGenreDto) {
    return this.filmGenreRepository.update({ id: id }, updateFilmGenreDto);
  }

  remove(id: string) {
    return this.filmGenreRepository.softDelete({ id: id });
  }
}
