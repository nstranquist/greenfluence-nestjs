import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { CreatePlaceDto } from './dto/create-place.dto';
import { UpdatePlaceDto } from './dto/update-place.dto';
import { Place } from '../interfaces/place.interface';
// import { Place } from './entities/place.entity';

@Injectable()
export class PlacesService {
  constructor(
    @Inject('PLACE_MODEL')
    private placeModel: Model<Place>,
  ) {}

  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    const createdPlace = new this.placeModel(createPlaceDto);
    return createdPlace.save();
  }

  async findAll(): Promise<Place[]> {
    return this.placeModel.find().exec();
  }

  async findOne(id: string) {
    return this.placeModel.findOne({ _id: id }).exec();
  }

  async update(id: string, updatePlaceDto: UpdatePlaceDto) {
    console.log('id:', id);
    return this.placeModel.findByIdAndUpdate(id, updatePlaceDto);
  }

  async remove(id: string) {
    return this.placeModel.findByIdAndDelete(id);
  }
}
