import React, { useEffect ,useState} from 'react'
import "./Login.css"
import { Button } from '@chakra-ui/react'


const Login = ({Canceotpverification}) => {


  const [username,setusername]=useState("")
  const [user,setuser]=useState("")

  useEffect(()=>{
    document.body.style.overflowY="hidden"

    return ()=>{
      document.body.style.overflowY="scroll"
    }
  },[])
  
  const HandleRegister=(e)=>{
    e.preventDefault()
    setusername(user)
    setuser("")
  }

  console.log(username)
  return (<>
    <div className='modal-wrapper' onClick={() => Canceotpverification()}></div>
    <div className='otp_box'>
      <div>
        <h1>WELCOME {username===""?"TO SAHAJ SHOPPING":":-"+username}</h1>

        <input placeholder='Enter Your Name' value={user} onChange={(e)=>{setuser(e.target.value)}}/>
        <Button className='bttn' variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={HandleRegister} >Register</Button>
      </div>
      <div>
      <Button className='bttn' variant='solid' colorScheme='red' color="black" fontSize="lg" onClick={() => Canceotpverification()} >EXIT</Button>
      </div>
    </div>
    </>
  )
}

export default Login
