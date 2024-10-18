import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppSections from './AppSections'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppSections/>
  </StrictMode>,
)
