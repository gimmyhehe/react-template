import React from 'react'
import logo from './logo.svg'
import { Button } from 'antd'
// import 'antd/es/button/style/css'
import './App.less'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Button type="primary">Primary</Button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button type="primary">Primary</Button>
    </div>
  )
}

export default App
