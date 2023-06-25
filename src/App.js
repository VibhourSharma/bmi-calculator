import React, { useState } from "react";
import "./index.css";

function App() {
  const { weight, setWeight } = useState(0);
  const { height, setHeight } = useState(0);
  const { bmi, setBmi } = useState("");
  const { message, setMessage } = useState("");

  let calcBmi = (e) => {
    e.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter valid height!");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 25) {
        setMessage("you are underweight");
      } else if (bmi > 25) {
        setMessage("you are healthy");
      } else {
        setMessage("you are overweight");
      }
    }
  };

  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <h2>BMI Calculator</h2>
      <form onSubmit={calcBmi}>
        <div>
          <label>Weight (lbs)</label>
          <input
            type="number"
            placeholder="enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (in)</label>
          <input
            type="number"
            placeholder="enter height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
          />
        </div>
        <div>
          <button className="btn" type="submit">
            Submit
          </button>
          <button className="btn btn-outline" onClick={reload} type="submit">
            Reload
          </button>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default App;
