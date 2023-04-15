import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';
import * as csurf from 'csurf';
import * as cookieParser from 'cookie-parser';
// import { VersioningType } from '@nestjs/common';

const port = process.env.PORT || 3000;

const apiVersion = 'v1';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  app.use(cookieParser());
  app.use(csurf({ cookie: true }));
  app.use(helmet());
  app.setGlobalPrefix(`api/${apiVersion}`);
  // app.enableVersioning({
  //   type: VersioningType.URI,
  //   prefix: 'v1',
  // });
  await app.listen(port);
}
bootstrap();
