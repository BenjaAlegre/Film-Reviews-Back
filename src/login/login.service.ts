import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { SECRETS } from '../common/constants/secretJWT.constants';
import { hashPassword } from '../common/utils/hashPassword.utils';
import { UsersService } from '../users/users.service';
import { CreateLoginDto } from './dto/create-login.dto';

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
    const token = this.jwtService.sign(payload, { secret: SECRETS.SECRET, expiresIn: 999999999999999 });

    return {
      token: token,
      name: user.name,
      email: user.email,
      role: user.role.description,
      id: user.id,
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
