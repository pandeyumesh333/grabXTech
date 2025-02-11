import mongoose from "mongoose";

if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in the environment variables");
}
try {
  mongoose.connect(process.env.MONGODB_URI);
  console.log("Connected to MongoDB");
} catch (error) {
  console.log(error);
}

export default mongoose;
