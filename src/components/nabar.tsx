import { HStack, Image,Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../assets/gaming.png'
import ColorModeSwitch from './ColorModeSwitch.'


const NavBar = () => {
  return (
      <HStack>
        <Image src={logo} boxSize="60px"/>
        <Text>NavBar</Text>
        <ColorModeSwitch></ColorModeSwitch>
      </HStack>
  )
}

export default NavBar
