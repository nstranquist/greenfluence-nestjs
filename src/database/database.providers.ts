import * as mongoose from 'mongoose';

const mongoUrl =
  'mongodb+srv://root:darkmonkeys@cluster0.sdclrpo.mongodb.net/greenfluence';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(mongoUrl),
  },
];