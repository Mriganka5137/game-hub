import GameGrid from "./components/shared/GameGrid";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="p-5 mx-auto max-w-screen-2xl">
      <div className="w-full ">
        <NavBar />
      </div>
      <div className="flex gap-2 mt-2">
        <div className="w-1/3 max-lg:hidden "></div>
        <div className="flex flex-wrap ">
          <GameGrid />
        </div>
      </div>
    </div>
  );
}

export default App;
