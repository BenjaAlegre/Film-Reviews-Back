import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectRepository(Review)
    private readonly reviewRepository: Repository<Review>,
  ) {}
  async create(createReviewDto: CreateReviewDto) {
    return await this.reviewRepository.save(createReviewDto);
  }

  async findAll() {
    return await this.reviewRepository.find();
  }

  async findReviewsByUser(id: string)
  {
    return await this.reviewRepository.find({where:{user:{id:id}}, relations: ['user', 'film']});
  }

  async findOne(id: string) {
    return await this.reviewRepository.findOne({where:{id:id}, relations: ['film', 'comments', 'user', 'comments.user'],});
  }

  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return await this.reviewRepository.update({id:id}, updateReviewDto);
  }

  async remove(id: string) {
    return await this.reviewRepository.softDelete({id:id});
  }

  async findAllWithDeleted() {
    return await this.reviewRepository.find({withDeleted: true});
  }
}
