import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3008);
  logger.log(`REST application RUNNING on port ${3008}`);
}
bootstrap();
