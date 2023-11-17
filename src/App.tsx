import { useState } from "react";
import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";
import { Genre } from "./hooks/useGenres";
import PlatformList from "./components/shared/PlatformList";

function App() {
  const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);

  return (
    <div className="mx-auto max-w-screen-[1800px]">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="flex ">
        <div className="w-[350px]  max-lg:hidden bg-secondary/40 pt-10 pl-5  shadow-lg">
          <GenreList
            selectedGenre={selectedGenre}
            onSelectedGenre={(genre) => setSelectedGenre(genre)}
          />
        </div>
        <div className="flex flex-col w-full gap-8 p-2 pt-10 bg-secondary/30">
          <PlatformList />
          <GameGrid selectedGenre={selectedGenre} />
        </div>
      </div>
    </div>
  );
}

export default App;
