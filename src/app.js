import express from "express";
import dotenv from 'dotenv';
import helmet from "helmet";

// load environment variables
dotenv.config();

// create server
const app = express();

// secure HTTP headers
app.use(helmet());

// json body parser
app.use(express.json());

// test route
app.get('/', (req, res) => {
  res.send('Booking system api is running');
});

export default app;