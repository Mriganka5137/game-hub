import GameGrid from "./components/shared/GameGrid";
import GenreList from "./components/shared/GenreList";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="p-5 mx-auto border border-pink-100 max-w-screen-2xl">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="flex gap-2 mt-2">
        <div className="w-1/4 border border-green-200 max-lg:hidden">
          <GenreList />
        </div>
        <div className="flex flex-wrap w-3/4 max-lg:w-full">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
