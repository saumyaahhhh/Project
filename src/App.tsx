import { useState } from 'react'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [age, setAge] = useState(0)
  const [counter, setCounter] = useState(0)

  return (
    <main className="app">
      <section className="card">
        <h1>My React Application</h1>

        <label className="field">
          <span>Name</span>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <p className="greeting">Hello, {name || 'ALL'}!</p>

        <label className="field">
          <span>Age</span>
          <input
            type="number"
            placeholder="Enter your age"
            value={age}
            onChange={(e) => setAge(Number(e.target.value))}
          />
        </label>

        <p className="info">You are {age} years old.</p>

        <div className="counter-row">
          <span>Counter: {counter}</span>
          <button onClick={() => setCounter((value) => value + 1)}>Increment</button>
        </div>
      </section>
    </main>
  )
}

export default App