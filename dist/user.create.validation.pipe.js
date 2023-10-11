"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserValidationPipe = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const create_user_dto_1 = require("./users/dto/create-user.dto");
let CreateUserValidationPipe = class CreateUserValidationPipe {
    async transform(value, metaData) {
        console.log('++++++++++++++++++++++++++++++++++++++++++++++');
        console.log(`running CreateUserValidationPipe`);
        console.log(value);
        if (!metaData.metatype || !(metaData.metatype === create_user_dto_1.CreateUserDto)) {
            return value;
        }
        const user = (0, class_transformer_1.plainToClass)(metaData.metatype, value);
        if (user.name.length <= 0 || user.name.length > 10) {
            throw new common_1.BadRequestException('the length of the user name should be between 0 to 10: ' +
                user.name +
                ' vs ' +
                value.name);
        }
        return value;
    }
};
CreateUserValidationPipe = __decorate([
    (0, common_1.Injectable)()
], CreateUserValidationPipe);
exports.CreateUserValidationPipe = CreateUserValidationPipe;
//# sourceMappingURL=user.create.validation.pipe.js.map