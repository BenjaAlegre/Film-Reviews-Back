import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";
import { Role } from "src/roles/entities/role.entity";

export class CreateUserDto {
    @ApiProperty()
    @IsString()
    name: string;

    @ApiProperty()
    @IsString()
    password: string;

    @ApiProperty()
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    role: Role;
}
