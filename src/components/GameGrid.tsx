import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import { Genre } from "../hooks/useGenres";
import GameCard from "./GameCard";
import GameCardContainer from "./GameCardContainer";
import GameCardSkeleton from "./GameCardSkeleton";

interface Props {
    selectedGenre: Genre | null
}

const GameGrid = ({selectedGenre}: Props) =>{
        const {data, error, isLoading} = useGames(selectedGenre);
        const skeletons = [1, 2, 3, 4, 5, 6];
    return (
        <>
            {error && <div className="alert alert-danger">{error}</div>}
            <SimpleGrid columns={{ sm:1, md:2, lg:2, xl:3 }} spacing={6} padding='10px'>
                { !isLoading && data.map(game => (
                    <GameCardContainer key={game.id}>
                        <GameCard key={game.id} game={game} />
                    </GameCardContainer>
                    
                ))}
                {isLoading && skeletons.map(skeleton=> 
                    <GameCardContainer key={skeleton}>
                        <GameCardSkeleton key={skeleton} />
                    </GameCardContainer> 
                )}
            </SimpleGrid>
        </>
    )
};

export default GameGrid;