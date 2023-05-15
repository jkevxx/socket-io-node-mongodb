import { config } from 'dotenv';

config();

export const MONGO_DBI = process.env.MONGODB_URI;
