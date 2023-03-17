
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

    const iconMap: {[key:string]: IconType} = {
        //name: PlayStation
        //slug: playstation
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        ios: MdPhoneIphone
    }
    return (
        <HStack marginY='10px'>
            {platforms.map((platform)=>(
                <Icon as = {iconMap[platform.slug]} color='gray.500'/>
            ))}
        </HStack>
    )
}

export default PlatformIconList;
