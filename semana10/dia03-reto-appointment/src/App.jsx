
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from './pages/LoginPage'
import CitasPage from './pages/CitasPage'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/Citas" element={<CitasPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App