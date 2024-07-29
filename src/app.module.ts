import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommentsModule } from './comments/comments.module';
import { FilmsModule } from './films/films.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RolesModule } from './roles/roles.module';
import { UsersModule } from './users/users.module';
import { typeORM } from './config/typeORM';

@Module({
  imports: [TypeOrmModule.forRoot(typeORM()), UsersModule, FilmsModule, ReviewsModule, RolesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
