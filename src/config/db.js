import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const uri = 
    process.env.NODE_ENV === 'test' ? process.env.MONGU_URI_TEST : process.env.MONGU_URI_;

    await mongoose.connect(uri);
    console.log('MongoDB Connected Successfully');
  } catch (error) {
    console.log('Error connecting to MongoDB');
  }
}