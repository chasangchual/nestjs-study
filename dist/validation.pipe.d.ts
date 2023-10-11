import { ArgumentMetadata, PipeTransform } from '@nestjs/common';
export declare class CustomValidationPipe implements PipeTransform<any> {
    transform(value: any, { metatype }: ArgumentMetadata): Promise<any>;
    private toValidate;
}
export declare class DefaultValidationPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata): any;
}
export declare class AnotherDefaultValidationPipe implements PipeTransform<any> {
    transform(value: any, metadata: ArgumentMetadata): any;
}
