import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User)
  private readonly userRepository: Repository<User>){}

  create(createUserDto: CreateUserDto) {
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: string) {
    return this.userRepository.findOne({where:{id:id}})
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({id:id}, updateUserDto)
  }

  remove(id: string) {
    return this.userRepository.softDelete({id:id})
  }
}
