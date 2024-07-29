import { PartialType } from '@nestjs/swagger';
import { CreateFilmGenreDto } from './create-film-genre.dto';

export class UpdateFilmGenreDto extends PartialType(CreateFilmGenreDto) {}
