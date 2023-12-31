import React, { useState } from "react";
import "./index.css";

function App() {
  const [weight, setWeight] = useState();
  const [height, setHeight] = useState();
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  let calcBmi = (event) => {
    event.preventDefault();
    if (weight === 0 || height === 0) {
      alert("please enter valid height!");
    } else {
      let bmi = (weight / (height * height)) * 703;
      setBmi(bmi.toFixed(1));

      if (bmi < 18.5) {
        setMessage("You are Underweight🍴");
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        setMessage("You have a Healthy Weight👌");
      } else if (bmi >= 25.0 && bmi <= 29.9) {
        setMessage("Your are Overweight🍕");
      } else {
        setMessage("Obesity🤐");
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
          <label>Weight (Lbs) : </label>
          <input
            type="number"
            placeholder="enter weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
          />
        </div>
        <div>
          <label>Height (inches) : </label>
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
