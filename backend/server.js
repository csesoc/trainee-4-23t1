const express = require("express");
const mongoose = require("mongoose");
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

// Move to new file and import
const mySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  }
});

// Move to new file and import
const MyModel = mongoose.model('chicken', mySchema);

// Define route
app.post('/data', async (req, res) => {
  const { name, email } = req.body;
  console.log(name, email);
  const newData = MyModel.create({ name, email }).then((ans) => {
    res.send("Document inserted")
  }).catch((err) => {
    res.status(500).send(err.Message);
  })
});

app.listen(8000, () => {
  console.log("Server started on port 8000");
});