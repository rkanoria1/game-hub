

import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import NavBar from "./components/NavBar";
import PlatformSelector from "./components/PlatformSelector";
import { Platforms } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";

export interface GamesQuery {
  genre: Genre | null;
  platform: Platforms | null;
}

function App() {

  const [gameQuery, setGameQuery] =useState<GamesQuery>({} as GamesQuery);
  return (<Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`
  }}
    templateColumns={{
      base: '1fr',
      lg:'200px 1fr'
    }}
  >
      <GridItem area= 'nav'>
      <NavBar />
      </GridItem>
      
      <Show above="lg">
        <GridItem area ='aside' paddingX={5}>
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})} /></GridItem>
      </Show>
      <GridItem area='main'>
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform)=> setGameQuery({...gameQuery, platform})}/>
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>
  </Grid>);
}

export default App;