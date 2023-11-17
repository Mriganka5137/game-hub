import { useState } from "react";
import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/shared/PlatformList";
import { Platform } from "./hooks/useGames";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="mx-auto max-w-screen-[1800px]">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="flex ">
        <div className="w-[350px]  max-lg:hidden bg-secondary/40 pt-10 pl-5  shadow-lg">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>
        <div className="flex flex-col w-full gap-8 p-2 pt-10 bg-secondary/30">
          <PlatformList
            onSelectPlatform={(platform) =>
              setGameQuery({ ...gameQuery, platform })
            }
          />
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
