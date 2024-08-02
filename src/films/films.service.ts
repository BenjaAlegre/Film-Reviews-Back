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
    return await this.filmRepository.save(createFilmDto);
  }

  async findAll(limit?: number) {
    return await this.filmRepository.find({
      relations: ['reviews', 'reviews.user', 'genres', 'genres.genre'],
      take: limit
    });

    
  }

  async findOne(id: string) {
    return await this.filmRepository.findOne({
      where: { id: id },
      relations: ['reviews', 'reviews.user', 'genres', 'genres.genre'],
    });
  }

  async update(id: string, updateFilmDto: UpdateFilmDto) {
    return await this.filmRepository.update({ id: id }, updateFilmDto);
  }

  async remove(id: string) {
    return await this.filmRepository.softDelete({ id: id });
  }

  async findByTitle(title: string): Promise<Film[]> {
    return await this.filmRepository
      .createQueryBuilder('film')
      .where('LOWER(film.title) LIKE LOWER(:title)', { title: `%${title}%` })
      .leftJoinAndSelect('film.reviews', 'review')
      .leftJoinAndSelect('review.user', 'user')
      .getMany();
  }

  async findByYear(year: string): Promise<Film[]> {
    return await this.filmRepository
      .createQueryBuilder('film')
      .where("EXTRACT(YEAR FROM TO_DATE(film.released, 'YYYY-MM-DD')) = :year  ", { year: year })
      .leftJoinAndSelect('film.reviews', 'review')
      .leftJoinAndSelect('review.user', 'user')
      .getMany();
  }
  async findByGenre(genreDescription: string): Promise<Film[]> {
    return await this.filmRepository
      .createQueryBuilder('film')
      .innerJoinAndSelect('film.genres', 'filmGenre')
      .innerJoinAndSelect('filmGenre.genre', 'genre')
      .where('genre.description = :description', { description: genreDescription })
      .getMany();
  }
  async findByGenres(genreDescriptions: string[]): Promise<Film[]> {
    if (genreDescriptions.length === 0) {
      return []; // Retorna un array vacío si no se pasan géneros
    }

    return await this.filmRepository
      .createQueryBuilder('film')
      .innerJoinAndSelect('film.genres', 'filmGenre')
      .innerJoinAndSelect('filmGenre.genre', 'genre')
      .where('genre.description IN (:...descriptions)', { descriptions: genreDescriptions })
      .getMany();
  }
}
