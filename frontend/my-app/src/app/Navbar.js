import React from 'react'
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom";
import ImageUpld from './ImageUpld';
const Navbar = () => {
  return (
    <nav style={{ borderBottom: "solid 1px", paddingBottom: "1rem" }}>
            <Link to="/login">login</Link>|{" "}
            <Link to="/Newview">new view</Link>|{" "}
            <Link to="/testview">test view</Link>|{" "}
            <Link to="/products">products</Link>|{" "}
            <Link to="/imageupload">image upload</Link>
            <Link to="/zhopa">zhopa</Link>
            
            
        </nav>
  )
}

export default Navbar