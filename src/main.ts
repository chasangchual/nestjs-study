import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  AnotherDefaultValidationPipe,
  DefaultValidationPipe,
} from './validation.pipe';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new DefaultValidationPipe());
  app.useGlobalPipes(new AnotherDefaultValidationPipe());
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  //app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
