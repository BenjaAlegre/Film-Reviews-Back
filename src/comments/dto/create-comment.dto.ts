import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Review } from "../../reviews/entities/review.entity";
import { User } from "../../users/entities/user.entity";

export class CreateCommentDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsString()
  review: Review;

  @ApiProperty()
  @IsString()
  user: User;
}
