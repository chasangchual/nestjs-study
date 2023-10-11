import {
  ValidationOptions,
  registerDecorator,
  ValidationArguments,
} from 'class-validator';

export function NotIn(property: string, validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'NotIn',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [property],
      validator: {
        validate(value: any, args: ValidationArguments) {
          const [relatedPropertyName] = args.constraints;
          const relatedValue = (args.object as any)[relatedPropertyName];
          console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`');
          console.log(args);
          console.log('relatedPropertyName: ' + relatedPropertyName);
          console.log(('object: ' + args.object) as any);
          console.log('relatedValue: ' + relatedValue);
          return (
            typeof value === 'string' &&
            typeof relatedValue === 'string' &&
            !relatedValue.includes(value)
          );
        },
      },
    });
  };
}
