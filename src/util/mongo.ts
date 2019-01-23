import * as mongoose from 'mongoose';
import { Categories } from '../models/categories.model'
class MongoAgent {
  private db = "mongodb://emsworks:grk426333@ds127101.mlab.com:27101/xprepo";
  constructor() {

  }

  public connect() {
    mongoose
      .connect(this.db)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
  }

  public getCategories() {
    const collection = new mongoose.Collection('Categories', mongoose.connection);
    console.log(collection);
    console.log(collection.find());
  }
}
export const mongoAgent = new MongoAgent();