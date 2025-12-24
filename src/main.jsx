import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // We remove the .jsx extension to help Vite resolve it

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)


