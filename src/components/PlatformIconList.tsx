
import {FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid} from 'react-icons/fa';
import { MdPhoneIphone } from 'react-icons/md';
import { SiNintendo } from 'react-icons/si';

import { Text, Icon, HStack } from "@chakra-ui/react";
import { Platforms } from "../hooks/useGames";
import { IconType } from 'react-icons/lib';


interface Props {
    platforms: Platforms[]
}

const PlatformIconList = ({platforms}: Props) =>{

    const iconMap: {[key:string]: IconType} = { //Index signature syntax
        //name: PlayStation
        //slug: playstation
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone,
        android: FaAndroid
    }
    return (
        <HStack marginY={1}>
            {platforms.map((platform)=>(
                <Icon as = {iconMap[platform.slug]} color='gray.500' key={platform.id}/>
            ))}
        </HStack>
    )
}

export default PlatformIconList;
