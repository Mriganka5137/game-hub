import { useState } from "react";
import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";
import PlatformList from "./components/shared/PlatformList";
import SortSelector from "./components/shared/SortSelector";
import { Platform } from "./hooks/useGames";
import { Genre } from "./hooks/useGenres";
import GameHeading from "./components/shared/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOptions: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <div className="">
      <div className="w-full mx-auto max-w-screen-[1800px]">
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </div>
      <div className="flex ">
        <div className="w-[350px]  max-lg:hidden bg-secondary/40 pt-10 pl-5  shadow-lg ">
          <GenreList
            selectedGenre={gameQuery.genre}
            onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
          />
        </div>
        <div className="flex flex-col w-full gap-8 pt-10 mx-auto bg-secondary/30 max-w-7xl">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex w-full gap-5 px-5">
            <PlatformList
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
            />
            <SortSelector
              onSelectSort={(value) =>
                setGameQuery({ ...gameQuery, sortOptions: value })
              }
            />
          </div>
          <GameGrid gameQuery={gameQuery} />
        </div>
      </div>
    </div>
  );
}

export default App;
