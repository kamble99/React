import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CompA from './component/compA'
const data = createContext()
const data1 = createContext()


function App() {
const name='praneet'
const age='25'

  return (
    <>
      <data.Provider value={name}>
        <data1.Provider value={age}>
          <CompA />
        </data1.Provider>
      </data.Provider>

    </>
  )
}

export default App
export { data, data1 }

