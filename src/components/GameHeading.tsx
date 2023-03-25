import { Heading } from "@chakra-ui/react"
import { GamesQuery } from "../App";


interface Props {
    gameQuery: GamesQuery;
}

const GameHeading = ({gameQuery}: Props) => {

    //Games
    //Action Games
    //Xbox Games
    //Xbox Action Games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name|| ''} Games` 

    return (
        <>
            <Heading as='h1' marginBottom={4}>{heading}</Heading>
        </>
    )
}

export default GameHeading;