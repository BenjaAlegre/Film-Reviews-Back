import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { constructor } from 'assert';

export const typeORM = (): TypeOrmModuleOptions => {
 
  constructor(private configService: ConfigService) {}

  return {
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'root',
    database: 'films',
    entities: ['dist/**/*.entity.{ts,js}'],
    synchronize: true,
  };
};
