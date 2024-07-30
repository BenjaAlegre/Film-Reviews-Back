import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthJWTGuard } from '../common/guards/authJWT.guard';
import { IsAdminGuard } from '../common/guards/isAdmin.guard';
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

  create(createUserDto: CreateUserDto) {
    createUserDto.password = hashPassword(createUserDto.password);
    return this.userRepository.save(createUserDto);
  }

  findAll() {
    return this.userRepository.find();
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
}
