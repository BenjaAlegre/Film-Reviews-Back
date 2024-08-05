import { Comment } from 'src/comments/entities/comment.entity';
import { Review } from 'src/reviews/entities/review.entity';
import { Role } from 'src/roles/entities/role.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DateCreator } from '../../common/utils/dateCreator.utils';

@Entity('user')
export class User extends DateCreator{
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('text')
  name: string;

  @Column('text')
  password: string;

  @Column('text')
  email: string;

  @ManyToOne(() => Role, (role) => role.user)
  role: Role;

  @OneToMany(() => Comment, (comment) => comment.user)
  comments: Comment[];

  @OneToMany(() => Review, (review) => review.user)
  reviews: Review[];
}
