import GameGrid from "./components/shared/GameGrid";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className="grid grid-cols-3 mx-auto max-w-7xl">
      <div className="col-span-3">
        <NavBar />
      </div>
      <div className="col-span-1 max-lg:hidden">Aside</div>
      <div className="col-span-2 p-5 max-lg:col-span-3">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
