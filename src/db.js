import { connect } from 'mongoose';
import { MONGO_DBI } from './config.js';

export const connectDB = async () => {
  try {
    await connect(MONGO_DBI);
    console.log('connect to db');
  } catch (error) {
    console.log(error);
  }
};
