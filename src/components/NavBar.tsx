import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorModeScript from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
const NavBar = () =>{
    return (
        <HStack padding='10px'>
            <Image src ={logo} alt="Hello Bpis" boxSize="60px"/>
            <SearchInput />
            <ColorModeScript />
        </HStack>
    )
}

export default NavBar;