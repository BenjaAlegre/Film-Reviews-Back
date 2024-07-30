import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFilmDto } from './dto/create-film.dto';
import { UpdateFilmDto } from './dto/update-film.dto';
import { Film } from './entities/film.entity';

@Injectable()
export class FilmsService {
  constructor(
    @InjectRepository(Film)
    private readonly filmRepository: Repository<Film>,
  ) {}

  async create(createFilmDto: CreateFilmDto): Promise<Film> {
    // genreDto.password = hashPassword(genreDto.password);
    return await this.filmRepository.save(createFilmDto);
  }

  findAll() {
    return this.filmRepository.find({
      relations: ['reviews', 'reviews.user'],
    });
  }

  async findOne(id: string) {
    return await this.filmRepository.findOne({
      where: { id: id },
      relations: ['reviews', 'reviews.user'],
    });
  }

  update(id: string, updateFilmDto: UpdateFilmDto) {
    return this.filmRepository.update({ id: id }, updateFilmDto);
  }

  remove(id: string) {
    return this.filmRepository.softDelete({ id: id });
  }
}
