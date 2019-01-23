import * as mongoose from 'mongoose';
class MongoAgent {
  private db = "mongodb://emsworks:grk426333@ds127101.mlab.com:27101/xprepo";

  public connect() {
    mongoose
      .connect(this.db)
      .then(() => console.log('MongoDB Connected'))
      .catch(err => console.log(err));
  }
}
export const mongoAgent = new MongoAgent();