import React, { useState } from 'react';
import './App.css';

function App() {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="App">
      {!submitted ? (
        <div>
          <h2>How would you rate our service?</h2>
          {[1, 2, 3, 4, 5].map((num) => (
            <button
              key={num}
              onClick={() => setRating(num)}
              style={{ margin: '5px', padding: '10px', background: rating === num ? '#333' : '#ccc' }}
            >
              {num}
            </button>
          ))}
          <br />
          <button onClick={() => setSubmitted(true)} style={{ marginTop: '10px' }}>
            Submit
          </button>
        </div>
      ) : (
        <h3>Thank you! You rated us {rating}/5.</h3>
      )}
    </div>
  );
}

export default App;
