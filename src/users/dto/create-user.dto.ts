import { BadRequestException } from '@nestjs/common';
import { Transform } from 'class-transformer';
import {
  IsString,
  MinLength,
  MaxLength,
  IsEmail,
  Matches,
} from 'class-validator';
import { NotIn } from 'src/domain/model/validator/not-in';

export class CreateUserDto {
  @Transform((params) => {
    console.log('^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^');
    console.log(params);
    // return 'new-name-too-long';
    // if (params.obj.password.includes(params.obj.name)) {
    //   throw new BadRequestException('password can not contain user name.');
    // }
    return params.value.trim();
  })
  @NotIn('password', {
    message: 'password can not include the value of name attribute',
  })
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly name: string;

  @IsString()
  @MaxLength(60)
  @IsEmail()
  readonly email: string;

  @IsString()
  @Matches(/^[A-Za-z\d!@#$%^&*()]{8,40}$/)
  readonly password: string;
}
