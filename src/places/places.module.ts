import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { PlacesController } from './places.controller';
import { placesProviders } from './places.providers';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  imports: [DatabaseModule], // todo test if global makes this irrelevant
  controllers: [PlacesController],
  providers: [PlacesService, ...placesProviders],
})
export class PlacesModule {}
