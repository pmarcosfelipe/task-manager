const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');

require('dotenv').config();

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Task Manager App');
});

app.use('/api/v1/tasks', tasks);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(
      process.env.PORT,
      console.log(`server is listening on port ${process.env.PORT}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
