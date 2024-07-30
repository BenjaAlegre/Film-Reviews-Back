import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { hashPassword } from '../common/utils/hashPassword.utils';
import { User } from '../users/entities/user.entity';
import { UsersService } from '../users/users.service';
import { CreateLoginDto } from './dto/create-login.dto';
import { SECRETS } from '../common/constants/secretJWT.constants';

@Injectable()
export class LoginService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async login({ email, password }: CreateLoginDto) {
    const user = await this.userService.findOneByEmail(email);

    if (!user) {
      throw new UnauthorizedException('Invalid email');
    }

    const isPasswordValid = hashPassword(password) == user.password;

    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid password');
    }
    console.log(user);
    const payload = { email: user.email, role: user.role.description };
    console.log(payload);
    const token = this.jwtService.sign(payload, { secret: SECRETS.SECRET, expiresIn: 100 });

    return {
      token: token,
      email: user.email,
      role: user.role.description,
    };
  }

  async verifyToken(token: string) {
    try {
      await this.jwtService.verify(token);
      const decoded = await this.jwtService.decode(token);
      return decoded;
    } catch (error) {
      throw new UnauthorizedException(error);
    }
  }
}
