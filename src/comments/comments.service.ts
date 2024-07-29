import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  create(createCommentDto: CreateCommentDto) {
    return this.commentRepository.save(createCommentDto);
  }

  findAll() {
    return this.commentRepository.find();
  }

  findOne(id: string) {
    return this.commentRepository.findOne({where:{id:id}});
  }

  update(id: string, updateCommentDto: UpdateCommentDto) {
    return this.commentRepository.update({id:id}, updateCommentDto);
  }

  remove(id: string) {
    return this.commentRepository.softDelete({id:id});
  }
}
