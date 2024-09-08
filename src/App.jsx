import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let oldCount = JSON.parse(localStorage.getItem('count'));
    setCount(oldCount);
  }, [setCount]);

  let decrement = () => {
    let newCount = count - 1;
    setCount(newCount)
    localStorage.setItem('count', JSON.stringify(newCount));
  }

  let increment = () => {
    let newCount = count + 1;
    setCount(newCount);
    localStorage.setItem('count', JSON.stringify(newCount));
  }

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <h2>Count: {count}</h2>
      <div className="card">
        <button onClick={increment}>
          Increment
        </button>
        <button onClick={decrement}>
          Decrement
        </button>
      </div>
    </>
  )
}

export default App
