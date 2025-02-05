import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { FilmGenre } from '../../film-genres/entities/film-genre.entity';
import { Review } from '../../reviews/entities/review.entity';

@Entity('Film')
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  released: string;

  @Column('text')
  poster: string;

  @Column('int')
  popularity: number;

  @Column('int')
  runtime: number;

  @OneToMany(() => Review, (review) => review.film)
  reviews: Review[];

  @OneToMany(() => FilmGenre, (filmGenre) => filmGenre.film)
  genres: FilmGenre[];
}
