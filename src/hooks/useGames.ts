import { GamesQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";


export interface Platforms {
    id: number;
    name: string;
    slug: string;
}
export interface Game {
    id: number;
    name: string;
    background_image : string;
    parent_platforms: {platform: Platforms}[];
    metacritic: number;
}

const useGames = (gameQuery: GamesQuery) => useData<Game>('/games', { params: { genres: gameQuery.genre?.id, platforms: gameQuery.platform?.id }}, [gameQuery]);

export default useGames;