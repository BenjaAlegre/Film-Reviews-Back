import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenresService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>,
  ) {}

  async create(createGenreDto: CreateGenreDto): Promise<Genre> {
    // genreDto.password = hashPassword(genreDto.password);
    return await this.genreRepository.save(createGenreDto);
  }

  findAll() {
    return this.genreRepository.find({
      relations: {},
    });
  }

  findOne(id: string) {
    return this.genreRepository.findOne({
      where: { id: id },
      relations: {},
    });
  }

  update(id: string, updateGenreDto: UpdateGenreDto) {
    return this.genreRepository.update({ id: id }, updateGenreDto);
  }

  remove(id: string) {
    return this.genreRepository.softDelete({ id: id });
  }
}
