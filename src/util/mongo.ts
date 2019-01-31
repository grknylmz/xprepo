import * as mongoose from 'mongoose';
import * as config from '../config/config'
class MongoAgent {
  private db = config.default.mongodb;

  public connect() {
    mongoose
      .connect(this.db)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
  }
}
export const mongoAgent = new MongoAgent();