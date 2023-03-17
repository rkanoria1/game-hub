import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    results : Game[]; 
}

const GameGrid = () =>{
        const {games, error} = useGames();
    return (
        <>
            {error && <div className="alert alert-danger">{error}</div>}
            <SimpleGrid columns={{ sm:1, md:2, lg:2, xl:3 }} spacing={10} padding='10px'>
                {games.map(game => (
                    <GameCard key={game.id} game={game} />
                ))}
            </SimpleGrid>
        </>
    )
};

export default GameGrid;