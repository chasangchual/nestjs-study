"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bootstrap = void 0;
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const validation_pipe_1 = require("./validation.pipe");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.DefaultValidationPipe());
    app.useGlobalPipes(new validation_pipe_1.AnotherDefaultValidationPipe());
    app.useGlobalPipes(new common_1.ValidationPipe({
        transform: true,
    }));
    await app.listen(3000);
}
exports.bootstrap = bootstrap;
//# sourceMappingURL=bootstrap.js.map