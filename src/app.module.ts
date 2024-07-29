import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { FilmsModule } from './films/films.module';
import { ReviewsModule } from './reviews/reviews.module';
import { RolesModule } from './roles/roles.module';
import { CommentsModule } from './comments/comments.module';

@Module({
  imports: [UsersModule, FilmsModule, ReviewsModule, RolesModule, CommentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
