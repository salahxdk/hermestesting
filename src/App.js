import React, { useState } from 'react';
import axios from 'axios';

function StringDisplayApp() {
  const [fact, setFact] = useState('');

  const fetchData = async () => {
    try {
      const response = await axios.get('https://catfact.ninja/fact');
      setFact(response.data.fact);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <h1>String Display App</h1>
      <button onClick={fetchData}>Fetch String</button>
      <textarea
        readOnly
        rows={5}
        cols={50}
        value={fact}
        style={{ marginTop: '10px' }}
      />
    </div>
  );
}

export default StringDisplayApp;
