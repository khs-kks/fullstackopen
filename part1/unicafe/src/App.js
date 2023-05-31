import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    
    const handleGoodFeedback = () => {
      setGood(good+1)
    }
    return handleGoodFeedback
  }

  const handleNeutralClick = () => {
    const handleNeutralFeedback = () => {
      setNeutral(neutral+1)
    }
    return handleNeutralFeedback
  }

  const handleBadClick = () => {
    const handleBadFeedback = () => {
      setBad(bad+1)
    }
    return handleBadFeedback
  }

  const printGood = good;
  const printBad = bad;
  const printNeutral = neutral;

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={handleGoodClick()}>good</button>
      <button onClick={handleNeutralClick()}>neutral</button>
      <button onClick={handleBadClick()}>bad</button>
      <h1>statistics</h1>
      <p>good {printGood}</p>
      <p>bad {printBad}</p>
      <p>neutral {printNeutral}</p>

    </div>
  )
}

export default App;
