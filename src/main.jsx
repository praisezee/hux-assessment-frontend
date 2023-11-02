import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import { MainProvider } from './context/MainContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <Router>
        <Routes>
        <Route path="/*" element={
          <MainProvider>
            <App />
          </MainProvider>
        } />
        </Routes>
      </Router>
    
  </React.StrictMode>,
)
