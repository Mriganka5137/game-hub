import NavBar from "./components/shared/NavBar";

function App() {
  return (
    <div className=" grid grid-cols-2">
      <div className="col-span-2">
        <NavBar />
      </div>
      <div className="  max-lg:hidden">Aside</div>
      <div className="  max-lg:col-span-2">Main</div>
    </div>
  );
}

export default App;
