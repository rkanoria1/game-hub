import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp';
import ColorModeScript from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
    onSearch: (searchText: string)=> void;
}

const NavBar = ({onSearch}:Props) =>{
    return (
        <HStack padding='10px'>
            <Image src ={logo} alt="Hello Bpis" boxSize="60px"/>
            <SearchInput onSearch={onSearch}/>
            <ColorModeScript />
        </HStack>
    )
}

export default NavBar;