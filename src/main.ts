import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { setupSwagger } from './util/swagger';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  app.enableCors();
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: {
        enableImplicitConversion: true,
      },
    }),
  );
  setupSwagger(app);
  await app.listen(3000);
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
  console.log(`Application is running on: ${await app.getUrl()}`);
}
bootstrap();
