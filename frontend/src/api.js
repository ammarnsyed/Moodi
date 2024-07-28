import axios from 'axios';

export const logMood = async (mood, note) => {
  await axios.post('http://localhost:3000/logMood', { mood, note });
};

export const fetchMoodData = async () => {
  const response = await axios.get('http://localhost:3000/moodData');
  return response.data;
};
