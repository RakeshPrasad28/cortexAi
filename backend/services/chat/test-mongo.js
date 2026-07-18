import mongoose from "mongoose";
const uri = "mongodb://rakeshrocco23_db_user:FKGPZQ0cFO3EtYO2@ac-gkolahn-shard-00-00.1qrohs6.mongodb.net:27017,ac-gkolahn-shard-00-01.1qrohs6.mongodb.net:27017,ac-gkolahn-shard-00-02.1qrohs6.mongodb.net:27017/chat?ssl=true&replicaSet=atlas-8fpwdx-shard-0&authSource=admin";

async function run() {
  try {
    await mongoose.connect(uri);
    console.log("Successfully connected to MongoDB with Mongoose.");
    process.exit(0);
  } catch (err) {
    console.error("Connection failed:", err);
    process.exit(1);
  }
}
run();
