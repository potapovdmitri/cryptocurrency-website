import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import MyButton from '../UI/button/MyButton';

const Navbar = () => {
  return (
    <>
    <header>
    <div className='navbar'>
      <h1>D/CROESUS</h1>
      <div className='navbar__links'>
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/exchange">Exchange</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contacts">Contact Us</NavLink>
      </div>
      <div className="register__btn">
      <MyButton>Log In / Register</MyButton>
      </div>
    </div>
    </header>
    <Outlet></Outlet>
    </>
  );
};

export default Navbar;
