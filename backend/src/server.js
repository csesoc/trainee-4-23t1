import userRoutes from './routes/user.js';
import express from 'express';
import mongoose from 'mongoose';
const app = express();
app.use(express.json());

const uri = "mongodb+srv://chrico:chrico@cluster0.exkcy8w.mongodb.net/?retryWrites=true&w=majority"

async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error(error);
  }
}

connect();

app.use('/users', userRoutes);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});