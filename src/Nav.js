import React, { useState, useEffect } from 'react';
import "./Nav.css";

function Nav() {
    const [show, handleShow] = useState(false);
    const transitionNavBar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false)
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", transitionNavBar)
        return () => window.removeEventListener('scroll', transitionNavBar)
    }, [])
  return (
    <div className='nav nav__black'>
        <div className="nav__contents">
        <img
        className='nav__logo' 
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo-700x394.png" alt=""></img>
        <img
        className='nav__avatar' 
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt=""></img>
        </div>
    </div>
  )
}

export default Nav
