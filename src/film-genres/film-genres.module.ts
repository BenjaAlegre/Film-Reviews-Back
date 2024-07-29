import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmGenre } from './entities/film-genre.entity';
import { FilmGenresController } from './film-genres.controller';
import { FilmGenresService } from './film-genres.service';

@Module({
  imports: [TypeOrmModule.forFeature([FilmGenre])],

  controllers: [FilmGenresController],
  providers: [FilmGenresService],
})
export class FilmGenresModule {}
