import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import History from './routes/history/History'
import Gods from './routes/gods/Gods'
import Contact from './routes/contact/Contact'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="/history" element={<History />}></Route>
      <Route path="/gods" element={<Gods />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>
  </BrowserRouter>
)
