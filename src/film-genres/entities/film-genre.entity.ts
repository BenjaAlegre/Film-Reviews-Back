import { Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from '../../films/entities/film.entity';
import { Genre } from '../../genres/entities/genre.entity';

@Entity('Film_Genre')
export class FilmGenre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Film, (film) => film.genres)
  film: Film;

  @ManyToOne(() => Genre, (genre) => genre.films)
  genre: Genre;
}
