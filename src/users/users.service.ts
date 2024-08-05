import { BadRequestException, Injectable } from '@nestjs/common';
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
    const foundUser = await this.userRepository.findOne({ where: { email: createUserDto.email } });

    if (foundUser) throw new BadRequestException('This email already exist');
    createUserDto.password = hashPassword(createUserDto.password);
    return await this.userRepository.save(createUserDto);
  }

  async findAll() {
    return await this.userRepository.find({ relations: ['role'] });
  }
  async findAllWithDeleted() {
    return await this.userRepository.find({ withDeleted: true, relations: ['role'] });
  }
  async findOne(id: string) {
    return await this.userRepository.findOne({ where: { id: id } });
  }

  async findOneByEmail(email: string) {
    return await this.userRepository.findOne({
      where: { email: email },
      relations: ['role'],
    });
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    return await this.userRepository.update({ id: id }, updateUserDto);
  }

  async remove(id: string) {
    return await this.userRepository.softDelete({ id: id });
  }

  async restore(id: string) {
    return await this.userRepository.restore({ id: id });
  }
}
