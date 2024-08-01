import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { hashPassword } from '../common/utils/hashPassword.utils';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPassword(createUserDto.password);
    return await this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find({ relations: ['role'] });
  }
  findAllWithDeleted() {
    return this.userRepository.find({ withDeleted: true, relations: ['role'] });
  }
  findOne(id: string) {
    return this.userRepository.findOne({ where: { id: id } });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email: email },
      relations: ['role'],
    });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id: id }, updateUserDto);
  }

  // @UseGuards(AuthJWTGuard, IsAdminGuard)
  remove(id: string) {
    return this.userRepository.softDelete({ id: id });
  }

  async restore(id: string) {
    return await this.userRepository.restore({ id: id });
  }
}
