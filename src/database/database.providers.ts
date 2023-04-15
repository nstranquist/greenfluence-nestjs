import * as mongoose from 'mongoose';

// const mongoUrl = process.env.MONGODB_URI;
// console.log('mongoUrl', mongoUrl);
// console.log('mongodb_uri:', process.env.MONGODB_URI);

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(process.env.MONGODB_URI),
  },
];
