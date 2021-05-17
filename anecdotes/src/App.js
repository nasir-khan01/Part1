import React, { useState } from "react";

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Votes = ({ handleClick, text }) => {
  return (
    <>
      <button onClick={handleClick}>{text}</button>
    </>
  );
};

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
  ];

  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0));
  const [mostvotes, setmostvotes] = useState(0);

  const handleClicknext = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length));
  };

  const copyPoints = [...points];
  const handleClickVote = () => {
    copyPoints[selected] += 1;
    setPoints(copyPoints);
    setmostvotes(Math.max(...copyPoints));
  };
  const votes = <div>{anecdotes[selected]}</div>;
  console.log(copyPoints.indexOf(copyPoints));
  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {votes}
      <div>has {copyPoints[selected]} votes</div>
      <Button handleClick={handleClicknext} text="next anecdote" />
      <Votes handleClick={handleClickVote} text="vote" />
      <h1>Anecdote with most Votes</h1>
      {anecdotes[copyPoints.indexOf(mostvotes)]}
      <div>has {copyPoints[selected]} votes</div>
    </div>
  );
};

export default App;
