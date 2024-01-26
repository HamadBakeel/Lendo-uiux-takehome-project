import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './Scss/App.scss'

function App() {

  return (
    <>
      <div className="body">
        <aside className='sidebar'></aside>
        <div className="page">
          <header className='header'></header>
          <div className="content"></div>
        </div>
      </div>
    </>
  )
}

export default App
