import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import History from './routes/history/History'
import Gods from './routes/gods/Gods'
import Contact from './routes/contact/Contact'
import SignIn from './routes/Sign In/SignIn'
import SignInEmail from './routes/Sign In/SignInEmail'
import SignUpEmail from './routes/Sign In/SignUpEmail'
import Account from './routes/Sign In/Account'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <AuthContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/history" element={<History />}></Route>
        <Route path="/gods" element={<Gods />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signinemail" element={<SignInEmail />}></Route>
        <Route path="/signupemail" element={<SignUpEmail />}></Route>
        <Route
          path="/account"
          element={
            <Protected>
              <Account />
            </Protected>
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  </AuthContextProvider>
)
