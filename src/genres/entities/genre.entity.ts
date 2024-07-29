import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from '../../films/entities/film.entity';
import { FilmGenre } from '../../film-genres/entities/film-genre.entity';

@Entity('Genre')
export class Genre {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  description: string;

  @OneToMany(() => FilmGenre, (filmGenre) => filmGenre.genre)
  films: FilmGenre[];
}
