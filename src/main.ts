import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';

const port = process.env.PORT || 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));
  app.use(helmet());
  await app.listen(port);
}
bootstrap();
