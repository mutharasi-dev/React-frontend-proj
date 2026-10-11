import { NavLink } from 'react-router-dom'
import React from 'react'

function Sidebar() {
  return (
    <div className="sidebar">
      
        <NavLink to="/">Dashboard</NavLink>
        <NavLink to="/registered">View Registered</NavLink>
        <NavLink to="/payment">Payment History</NavLink>
      <p className="logout">Logout</p>
    </div>
  )
}

export default Sidebar;