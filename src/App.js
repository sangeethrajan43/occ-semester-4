import React, { useState } from "react";
import "./App.css";

function App() {
  const [rating, setRating] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    if (rating !== null) {
      setSubmitted(true);
    }
  };

  return (
    <div className="container">
      {!submitted ? (
        <div className="card">
          <h2>How did we do?</h2>
          <p>Please rate your experience:</p>
          <div className="ratings">
            {[1, 2, 3, 4, 5].map((num) => (
              <button
                key={num}
                className={rating === num ? "selected" : ""}
                onClick={() => handleRating(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <button className="submit-btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="card thank-you">
          <h2>Thank You!</h2>
          <p>You rated us {rating} out of 5.</p>
        </div>
      )}
    </div>
  );
}

export default App;