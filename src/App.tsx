import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="mx-auto max-w-screen-[1800px]">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="flex ">
        <div className="w-[400px]  max-lg:hidden bg-secondary/40 pt-10 pl-5">
          <GenreList />
        </div>
        <div className="w-full pt-10 bg-secondary/30">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
