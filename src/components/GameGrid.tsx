import { useEffect, useState } from "react";
import useGames from "../hooks/useGames";
import apiClient from "../services/api-client";

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
            <ul>
                {games.map(game => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    )
};

export default GameGrid;