import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { fetchMoodData } from '../api';

const Overview = () => {
  const [moodData, setMoodData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMoodData();
      setMoodData(data);
    };

    getData();
  }, []);

  const moods = ['😢', '😟', '😐', '😊', '😁'];
  const moodLabels = ['Very Sad', 'Sad', 'Neutral', 'Happy', 'Very Happy'];

  const data = {
    labels: moodData.map(log => new Date(log.timestamp).toLocaleTimeString()),
    datasets: [
      {
        data: moodData.map(log => log.mood),
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75,192,192,0.2)',
        hoverBorderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    scales: {
      y: {
        ticks: {
          callback: function(value) {
            return moods[value - 1];
          },
        },
      },
    },
    plugins: {
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return moodLabels[tooltipItem.raw - 1];
          },
        },
      },
    },
  };

  return (
    <div>
      <h2>Mood Overview</h2>
      <Line data={data} options={options} />
      <h3>Notes</h3>
      <ul>
        {moodData.map((log, index) => (
          <li key={index}>
            <strong>{new Date(log.timestamp).toLocaleString()}</strong>: {log.note}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overview;
