import { ApiProperty } from "@nestjs/swagger";
import { IsNumber, IsString } from "class-validator";
import { Film } from "../../films/entities/film.entity";
import { User } from "../../users/entities/user.entity";

export class CreateReviewDto {
  @ApiProperty()
  @IsString()
  title: string;

  @ApiProperty()
  @IsString()
  description: string;

  @ApiProperty()
  @IsNumber()
  score: number;

  @ApiProperty()
  @IsString()
  film: Film;

  @ApiProperty()
  @IsString()
  user: User;
}
