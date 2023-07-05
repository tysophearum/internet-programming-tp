import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as session from 'express-session';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(
    session({
      name: `tpip`,
      secret: 'your-secret-key', // Replace with your own secret key
      resave: false,
      saveUninitialized: true,
      cookie: {
        secure: false, // Set to true if using HTTPS
        maxAge: 60 * 60 * 1000,
      },
  }))
  app.enableCors()
  await app.listen(3000);
}
bootstrap();
