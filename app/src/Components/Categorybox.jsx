import React from 'react'
import { Text } from '@chakra-ui/react'


const Categorybox = ({Caterogy}) => {
  return (
    <div style={{
      textAlign:"center",height:"60px",fontFamily: "Times New Roman",position:"fixed",
      boxShadow: "rgb(38, 57, 77) 0px 20px 30px -10px",width:"90%", overflow: "hidden",zIndex: "2",marginBottom:"60px",
      backgroundColor:"black",color:"white"
    }}>
      <Text  fontSize='4xl'>Trending {Caterogy} Collection's</Text>
    </div>
  )
}

export default Categorybox
