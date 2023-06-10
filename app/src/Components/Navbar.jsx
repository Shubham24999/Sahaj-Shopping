import React from 'react'
import "./Navbar.css"
import { Button } from '@chakra-ui/react'

const Navbar = ({ changingData, HomaPage, loginstatus, Canceotpverification }) => {

  // console.log(searchValue)


  return (
    <div className='nav'>
      <div>
        <img onClick={() => HomaPage()} className="logo" src="https://i.postimg.cc/yN30qCMV/logo.jpg" alt="logo" />
        <h1 onClick={() => HomaPage()}>Sahaj Shopping</h1>
      </div>
      <div>
        {/* <div className='icons'> */}
        {/* <Button><h1>Sign-in/Sign-up</h1></Button> */}
        {
          !loginstatus && <>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => HomaPage()}>Home</Button>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => changingData("men's clothing")}>Men's</Button>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => changingData("women's clothing")}>Women's</Button>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => changingData("electronics")}>Electronics</Button>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => changingData("jewelery")}>Jewelery</Button>
        <Button variant='solid' colorScheme='red' color="black" 
          fontSize="lg" onClick={() => Canceotpverification()}>Login</Button> </>

        }
        {/* </div> */}
      </div>
    </div>
  )
}

export default Navbar
