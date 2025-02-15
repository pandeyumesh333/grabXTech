import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

const connectDB = async () => {
  if (mongoose.connection.readyState >= 1) {
    console.log("MongoDB already connected");
    return;
  }

  try {
    await mongoose.connect(MONGODB_URI, {
      dbName: "aryan", // Optional: specify your database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    } as any);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB Connection Error:", error);
    throw new Error("Database connection failed");
  }
};

export default connectDB;
