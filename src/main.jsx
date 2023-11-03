import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(

  <div className="wrapper">
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </div>
)
