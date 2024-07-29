import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FilmsController } from './films.controller';
import { FilmsService } from './films.service';

@Module({
  imports: [TypeOrmModule.forFeature([Comment])],

  controllers: [FilmsController],
  providers: [FilmsService],
})
export class FilmsModule {}
