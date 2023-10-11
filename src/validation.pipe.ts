import {
  ArgumentMetadata,
  BadRequestException,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { plainToInstance } from 'class-transformer';
import { validate } from 'class-validator';

@Injectable()
export class CustomValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    console.log(`running CustomValidationPipe for  ${value}`);
    console.log('**********************************************');

    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToInstance(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      for (const validateError of errors) {
        console.log(validateError);
      }
      throw new BadRequestException('Validation failed');
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}

@Injectable()
export class DefaultValidationPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`value for DefaultValidationPipe is  ${value}`);
    console.log(`metadata.type is ${metadata.type}`);
    console.log(`metadata.metatype is ${metadata.metatype}`);
    console.log(`metadata.data is ${metadata.data}`);
    console.log('-------------------------------------------');
    return value;
  }
}

@Injectable()
export class AnotherDefaultValidationPipe implements PipeTransform<any> {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log(`running AnotherDefaultValidationPipe`);
    console.log('===========================================');
    console.log(value);
    return value;
  }
}
