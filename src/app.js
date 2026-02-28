import express from "express";
import dotenv from 'dotenv';
import helmet from "helmet";

// load environment variables
dotenv.config();

// create server
const app = express();

// secure HTTP headers
app.use(helmet());

// test route
app.get('/', (req, res) => {
  res.send('Booking system API is running');
});

export default app;