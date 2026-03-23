import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { PrimeReactProvider } from 'primereact/api'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// // PrimeReact styles (important)
// import 'primereact/resources/themes/lara-light-blue/theme.css'
import 'primereact/resources/primereact.min.css'
import 'primeicons/primeicons.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <PrimeReactProvider>
      <App />
    </PrimeReactProvider>
    </BrowserRouter>
  </StrictMode>
)