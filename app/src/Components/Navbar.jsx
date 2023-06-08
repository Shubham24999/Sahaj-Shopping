import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='nav'>
      <div><img className="logo" src="https://i.postimg.cc/yN30qCMV/logo.jpg" alt="logo" /></div>
      <div><input type="text" /></div>
      <div>Sign-up/Sign-in</div>
      <div>Cart-icon</div>
    </div>
  )
}

export default Navbar
