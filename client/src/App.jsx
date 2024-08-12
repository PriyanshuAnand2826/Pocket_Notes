import { useState } from 'react'
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import NotFoundPage from './pages/NotFoundPage'
function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={< NotFoundPage />} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
