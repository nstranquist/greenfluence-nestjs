import { Document } from 'mongoose';

export interface Place extends Document {
  readonly name: string;
}
