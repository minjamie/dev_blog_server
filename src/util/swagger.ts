import { INestApplication } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import fs from 'fs';

export function setupSwagger(app: INestApplication): void {
  const swaggerInfo = fs.readFileSync('swagger-info.md', 'utf-8');

  const options = new DocumentBuilder()
    .setTitle('dev-blog api')
    .setDescription(swaggerInfo)
    .setVersion('1.0.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);
}
