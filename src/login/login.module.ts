import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SECRETS } from '../common/constants/secretJWT.constants';
import { User } from '../users/entities/user.entity';
import { UsersModule } from '../users/users.module';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';

@Module({
  imports: [
    UsersModule,
    TypeOrmModule.forFeature([User]),
    JwtModule.register({
      secret: SECRETS.SECRET,
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
  exports: [LoginService],
})
export class LoginModule {}
