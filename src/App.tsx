import { useState } from "react";
import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";
import PlatformList from "./components/shared/PlatformList";
import SortSelector from "./components/shared/SortSelector";
import GameHeading from "./components/shared/GameHeading";
import MenuSheet from "./components/shared/MenuSheet";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOptions: string | null;
  searchText: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  console.log(gameQuery);
  return (
    <div className="">
      <div className=" flex w-full mx-auto max-w-screen-[1800px] shadow-md bg-secondary/50 p-2">
        <MenuSheet gameQuery={gameQuery} setGameQuery={setGameQuery} />
        <NavBar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </div>
      <div className="flex ">
        <div className="w-[350px] max-lg:hidden pt-10 pl-5  shadow-lg bg-secondary/40">
          <h1 className="p-1 mb-3 text-2xl font-semibold">Genres</h1>
          <GenreList
            selectedGenreId={gameQuery.genreId}
            onSelectedGenre={(genre) =>
              setGameQuery({ ...gameQuery, genreId: genre?.id })
            }
          />
        </div>

        <div className="flex flex-col w-full gap-8 py-10 mx-auto bg-secondary/30 max-w-7xl ">
          <GameHeading gameQuery={gameQuery} />
          <div className="flex w-full gap-5 px-5">
            <PlatformList
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platformId: platform.id })
              }
              selectedPlatformId={gameQuery.platformId}
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
