import { IsUUID } from 'class-validator';
import { Film } from '../../films/entities/film.entity';
import { Genre } from '../../genres/entities/genre.entity';
import { ApiProperty } from '@nestjs/swagger';

export class CreateFilmGenreDto {
  @ApiProperty()
  @IsUUID()
  film: Film;
  @ApiProperty()
  @IsUUID()
  genre: Genre;
}
