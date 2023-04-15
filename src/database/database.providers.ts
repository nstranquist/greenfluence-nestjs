import * as mongoose from 'mongoose';

const mongoUrl = process.env.MONGODB_URI;

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(mongoUrl),
  },
];
