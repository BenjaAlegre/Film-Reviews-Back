import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsNumber, IsOptional, IsString } from 'class-validator';
import { FilmGenre } from '../../film-genres/entities/film-genre.entity';
import { Review } from '../../reviews/entities/review.entity';

export class CreateFilmDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  released: string;

  @ApiProperty()
  @IsString()
  poster: string;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  popularity: number;

  @ApiProperty()
  @IsNumber()
  @IsOptional()
  runtime: number;

  @ApiProperty()
  @IsString()
  @IsOptional()
  reviews: Review[];

  @ApiProperty()
  @IsArray()
  @IsOptional()
  genres: FilmGenre[];
}
