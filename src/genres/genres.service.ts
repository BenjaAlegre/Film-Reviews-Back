import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
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
    return await this.genreRepository.save(createGenreDto);
  }

  async findAll() {
    return await this.genreRepository.find({
      relations: {},
    });
  }

  async findOne(id: string) {
    return await this.genreRepository.findOne({
      where: { id: id },
      relations: {},
    });
  }

  async update(id: string, updateGenreDto: UpdateGenreDto) {
    return await this.genreRepository.update({ id: id }, updateGenreDto);
  }

  async remove(id: string) {
    return await this.genreRepository.softDelete({ id: id });
  }
}
