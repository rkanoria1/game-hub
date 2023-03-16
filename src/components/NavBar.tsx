import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorModeScript from "./ColorModeSwitch";
const NavBar = () =>{
    return (
        <HStack justifyContent='space-between' padding='10px'>
            <Image src ={logo} alt="Hello Bpis" boxSize="60px"/>
            <ColorModeScript />
        </HStack>
    )
}

export default NavBar;