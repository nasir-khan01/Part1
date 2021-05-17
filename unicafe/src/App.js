import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  let total = good + neutral + bad;
  let average = (good - bad) / total;
  let positive = (good / total) * 100 + " %";

  const clickGood = () => {
    setGood(good + 1);
  };

  const clickNeutral = () => {
    setNeutral(neutral + 1);
  };

  const clickBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={clickGood} text="good" />
      <Button handleClick={clickNeutral} text="neutral" />
      <Button handleClick={clickBad} text="bad" />
      <h1>statistics</h1>
      {total === 0 ? (
        <p>No feedback given</p>
      ) : (
        <>
          <table>
            <tbody>
              <Statistics text="good" value={good} />
              <Statistics text="neutral" value={neutral} />
              <Statistics text="bad" value={bad} />
              <Statistics text="all" value={total} />
              <Statistics text="average" value={average} />
              <Statistics text="positive" value={positive} />
            </tbody>
          </table>
        </>
      )}
    </div>
  );
};

export default App;
