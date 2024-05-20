import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`connected to  db${conn.connection.host}`);
  } catch (error) {
    console.log(`error${error}`.bgRed.white);
  }
};

export default connectDB;
