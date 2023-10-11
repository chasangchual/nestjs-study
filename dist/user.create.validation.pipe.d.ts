import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
import { CreateUserDto } from './users/dto/create-user.dto';
export declare class CreateUserValidationPipe implements PipeTransform<CreateUserDto> {
    transform(value: CreateUserDto, metaData: ArgumentMetadata): Promise<CreateUserDto>;
}
