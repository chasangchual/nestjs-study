"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotIn = void 0;
const class_validator_1 = require("class-validator");
function NotIn(property, validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'NotIn',
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [property],
            validator: {
                validate(value, args) {
                    const [relatedPropertyName] = args.constraints;
                    const relatedValue = args.object[relatedPropertyName];
                    console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`');
                    console.log(args);
                    console.log('relatedPropertyName: ' + relatedPropertyName);
                    console.log(('object: ' + args.object));
                    console.log('relatedValue: ' + relatedValue);
                    return (typeof value === 'string' &&
                        typeof relatedValue === 'string' &&
                        !relatedValue.includes(value));
                },
            },
        });
    };
}
exports.NotIn = NotIn;
//# sourceMappingURL=not-in.js.map