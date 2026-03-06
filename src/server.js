import { connectDB } from "./config/db.js";
import app from './app.js'

const PORT = process.env.PORT || 5001;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(PORT, () => {
      console.log('Server connected to PORT', PORT);
    })
  } catch (error) {
    console.log('Error connecting to MongoDB: ', error.message);
    process.exit(1);
  }
}

startServer();

