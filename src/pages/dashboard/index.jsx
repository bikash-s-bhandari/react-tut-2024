import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <nav style={{background:'#010101'}}>
        <ul>
          <li>
            <NavLink to="profile" className={({ isActive }) => (isActive ? 'active' : '')}>Profile</NavLink>
          </li>
          <li>
            <NavLink to="settings" className={({ isActive }) => (isActive ? 'active' : '')}>Settings</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet /> {/* This is where the nested routes will be rendered */}
    </div>
  );
}

export default Dashboard;
