import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Review } from '../../reviews/entities/review.entity';

@Entity()
export class Film {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  title: string;

  @Column('text')
  description: string;

  @OneToMany(() => Review, (review) => review.film)
  reviews: Review[];
}
