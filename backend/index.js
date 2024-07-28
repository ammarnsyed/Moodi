const express = require('express');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());

const moodLogs = []; // Replace with actual database

app.post('/logMood', (req, res) => {
  const { mood, note } = req.body;
  const timestamp = new Date().toISOString();
  moodLogs.push({ mood, note, timestamp });
  res.status(201).send('Mood logged successfully');
});

app.get('/moodData', (req, res) => {
  res.json(moodLogs);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
