import { ApiProperty } from '@nestjs/swagger';
import { IsArray, IsString } from 'class-validator';

export class FindFilmsByGenresDto {
  @ApiProperty()
  @IsArray()
  @IsString({ each: true })
  genres: string[];
}
