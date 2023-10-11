import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToClass, plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';
import { CreateUserDto } from './users/dto/create-user.dto';

@Injectable()
export class CreateUserValidationPipe implements PipeTransform<CreateUserDto> {
  async transform(value: CreateUserDto, metaData: ArgumentMetadata) {
    console.log('++++++++++++++++++++++++++++++++++++++++++++++');
    console.log(`running CreateUserValidationPipe`);
    console.log(value);

    if (!metaData.metatype || !(metaData.metatype === CreateUserDto)) {
      return value;
    }
    const user: CreateUserDto = plainToClass(metaData.metatype, value);

    if (user.name.length <= 0 || user.name.length > 10) {
      throw new BadRequestException(
        'the length of the user name should be between 0 to 10: ' +
          user.name +
          ' vs ' +
          value.name,
      );
    }

    return value;
  }
}
