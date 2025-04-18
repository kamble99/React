import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
function Fun(){
  return(
  <>
  <h1>This is fun component</h1></>)
}

createRoot(document.getElementById('root')).render(

 
  <StrictMode>
    <App />
    <Fun/>
    
  </StrictMode>,
)
