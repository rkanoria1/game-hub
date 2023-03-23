import { Card, CardBody, Heading, HStack, Image, Text } from "@chakra-ui/react";
import { Game } from "../hooks/useGames";
import getCroppedImageUrl from "../services/image-url";
import CriticScore from "./CriticScore";
import PlatformIconList from "./PlatformIconList";


interface Props {
    game: Game
}

//press command + T mad the searc Game/ or any keyword you want to search
const GameCard = ({game} : Props) =>{
    return (
        <>
        <Card>
            <Image src ={getCroppedImageUrl(game.background_image)} alt='Game Card' />
            <CardBody>
                <Heading fontSize='2xl'>{game.name}</Heading>
                {/* {game.parent_platforms.map(({platform})=> <Text>{platform.name}</Text>)} */}
                <HStack justifyContent='space-between'>
                    <PlatformIconList platforms={game.parent_platforms.map(p=>p.platform)} />
                    <CriticScore score={game.metacritic} />
                </HStack>
                
            </CardBody>
        </Card>
        </>
    )
}

export default GameCard;