import './App.css'
import Navbar from './Components/Navbar'
import Sidebar from './Components/Sidebar'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard'
import Registered from './Components/Registered'
import Payment from './Components/Payment'

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Sidebar />
        <div className="content">
          {/* <Content /> */}
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/registered" element={<Registered />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
        </div>
      </div>
    </>
  )
}

export default App
