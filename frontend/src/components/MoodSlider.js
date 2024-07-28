import React, { useState } from 'react';
import { logMood } from '../api';
import { useHistory } from 'react-router-dom';

const MoodSlider = () => {
  const [mood, setMood] = useState(3); // Default mood value
  const [note, setNote] = useState('');
  const history = useHistory();

  const handleMoodChange = (event) => {
    setMood(event.target.value);
  };

  const handleNoteChange = (event) => {
    setNote(event.target.value);
  };

  const handleLogMood = async () => {
    await logMood(mood, note);
    setNote(''); // Clear note after logging
    history.push('/overview'); // Redirect to overview page
  };

  return (
    <div>
      <input 
        type="range" 
        min="1" 
        max="5" 
        value={mood} 
        onChange={handleMoodChange} 
      />
      <div>
        {['😢', '😟', '😐', '😊', '😁'][mood - 1]}
      </div>
      <textarea
        placeholder="Why do you feel this way?"
        value={note}
        onChange={handleNoteChange}
      />
      <button onClick={handleLogMood}>Log Mood</button>
    </div>
  );
};

export default MoodSlider;
