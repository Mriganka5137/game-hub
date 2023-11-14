import GameGrid from "./components/shared/GameGrid";
import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className=" grid grid-cols-2">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="  max-lg:hidden">Aside</div>
      <div className="  max-lg:col-span-2 p-5">
        <GameGrid />
      </div>
    </div>
  );
}

export default App;
