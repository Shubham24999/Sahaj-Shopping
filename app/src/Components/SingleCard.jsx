import React, { useState } from 'react'

import { Card, 
  CardBody, CardFooter, Image, Stack, Heading, Text, Button, ButtonGroup
} from '@chakra-ui/react'

const SingleCard = ({title,img,description,price,handlesize,size,rating}) => {
    // console.log(handlesize,size)


    const text = description;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
    !size && handlesize();
  };

  console.log("hii")

  return (
    <Card maxW='sm'>
    <CardBody>
      <Image
        src={img}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
        boxSize='250px'
        // border="1px solid black"
      />
      <Stack mt='6' spacing='3'>
        <Heading size='md' >{title ? title.slice(0, 35) : text}</Heading>
        <Heading size='xs'  >
          {isReadMore ? text.slice(0, 140) : text.slice(0, 200)}
      <span style={{color:"red",textDecoration:"underline",cursor:"pointer"}} onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
        </Heading >
        {/* <Text color='blue.600' fontSize='lg'>
          Rs.{price * 10}
        </Text> */}
      </Stack>
    </CardBody>
    <CardFooter>
      <ButtonGroup spacing='8'>
        <Button><Text color='blue.600' fontSize='lg'>
          Rs.{Math.trunc((price * 10))}
        </Text></Button>
        <Button variant='solid' colorScheme='red' color="black" fontSize="lg">
          Rating:- {rating}
        </Button>
      </ButtonGroup>
    </CardFooter>
  </Card>
  )
}

export default SingleCard
