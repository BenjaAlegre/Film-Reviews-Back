import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Film } from '../../films/entities/film.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Review {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @Column('int')
  score: number;

  @ManyToOne(() => Film, (film) => film.reviews)
  film: Film;
  @ManyToOne(() => User, (user) => user.reviews)
  user: User;
  @OneToMany(() => Comment, (comment) => comment.review)
  comments: Comment[];
}
