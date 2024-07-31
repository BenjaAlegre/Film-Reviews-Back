import { Comment } from 'src/comments/entities/comment.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DateCreator } from '../../common/utils/dateCreator.utils';
import { Film } from '../../films/entities/film.entity';
import { User } from '../../users/entities/user.entity';

@Entity()
export class Review extends DateCreator{
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
