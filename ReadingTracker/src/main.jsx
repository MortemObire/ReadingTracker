import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Reading from './Reading.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Reading />
  </StrictMode>,
)
