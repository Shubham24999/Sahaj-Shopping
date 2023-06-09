import React from 'react'
import "./Navbar.css"
import { Button } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <div className='nav'>
      <div><img className="logo" src="https://i.postimg.cc/yN30qCMV/logo.jpg" alt="logo" /></div>
      <div><input type="text" /></div>
      <div className='btn'>
      <Button variant='solid' colorScheme='red'>
          Sign in
        </Button>
      <button><img alt="cart" src='https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg'/></button>
      </div>
    </div>
  )
}

export default Navbar
