import { useState } from 'react'

const StatisticLine = (props) => {
  if (props.text === "positive") {
    return (
      <tr>
        <th>{props.text}</th>
        <td>{props.value}%</td>
      </tr>
    );
  }
  return (
    <tr>
      <th>{props.text}</th>
      <td>{props.value}</td>
    </tr>
  );
};

const Statistics = (props) => {
  if (props.stats.all === 0) {
    return <p>no feedback yet</p>;
  }

  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={props.stats.printGood} />
          <StatisticLine text="bad" value={props.stats.printBad} />
          <StatisticLine text="neutral" value={props.stats.printNeutral} />
          <StatisticLine text="total" value={props.stats.all} />
          <StatisticLine text="average" value={props.stats.average} />
          <StatisticLine text="positive" value={props.stats.positive} />
        </tbody>
      </table>
    </>
  );
};


const Button = ({ text, handleClick }) => {
  return (

    <button onClick={handleClick()}>{text}</button>

  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {

    const handleGoodFeedback = () => {
      setGood(good + 1)
    }
    return handleGoodFeedback
  }

  const handleNeutralClick = () => {
    const handleNeutralFeedback = () => {
      setNeutral(neutral + 1)
    }
    return handleNeutralFeedback
  }

  const handleBadClick = () => {
    const handleBadFeedback = () => {
      setBad(bad + 1)
    }
    return handleBadFeedback
  }


  const statObject = {
    printGood: good,
    printBad: bad,
    printNeutral: neutral,
    all: good + bad + neutral,
    average: (good - bad) / good + bad + neutral,
    positive: (good / (good + bad + neutral)) * 100,
  };

  return (
    <div>
      <h1>give feedback</h1>
      <Button text="good" handleClick={handleGoodClick} />
      <Button text="neutral" handleClick={handleNeutralClick} />
      <Button text="bad" handleClick={handleBadClick} />
      <Statistics stats={statObject} />
    </div>
  )
}

export default App;
