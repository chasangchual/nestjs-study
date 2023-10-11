"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnotherDefaultValidationPipe = exports.DefaultValidationPipe = exports.CustomValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
let CustomValidationPipe = class CustomValidationPipe {
    async transform(value, { metatype }) {
        console.log(`running CustomValidationPipe for  ${value}`);
        console.log('**********************************************');
        if (!metatype || !this.toValidate(metatype)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToInstance)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            for (const validateError of errors) {
                console.log(validateError);
            }
            throw new common_1.BadRequestException('Validation failed');
        }
        return value;
    }
    toValidate(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
CustomValidationPipe = __decorate([
    (0, common_1.Injectable)()
], CustomValidationPipe);
exports.CustomValidationPipe = CustomValidationPipe;
let DefaultValidationPipe = class DefaultValidationPipe {
    transform(value, metadata) {
        console.log(`value for DefaultValidationPipe is  ${value}`);
        console.log(`metadata.type is ${metadata.type}`);
        console.log(`metadata.metatype is ${metadata.metatype}`);
        console.log(`metadata.data is ${metadata.data}`);
        console.log('-------------------------------------------');
        return value;
    }
};
DefaultValidationPipe = __decorate([
    (0, common_1.Injectable)()
], DefaultValidationPipe);
exports.DefaultValidationPipe = DefaultValidationPipe;
let AnotherDefaultValidationPipe = class AnotherDefaultValidationPipe {
    transform(value, metadata) {
        console.log(`running AnotherDefaultValidationPipe`);
        console.log('===========================================');
        console.log(value);
        return value;
    }
};
AnotherDefaultValidationPipe = __decorate([
    (0, common_1.Injectable)()
], AnotherDefaultValidationPipe);
exports.AnotherDefaultValidationPipe = AnotherDefaultValidationPipe;
//# sourceMappingURL=validation.pipe.js.map