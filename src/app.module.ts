import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { MongooseModule } from '@nestjs/mongoose';
import { PlacesModule } from './places/places.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [
    // MongooseModule.forRoot(mongoUrl, { isGlobal: true, global: true }),
    DatabaseModule,
    PlacesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
