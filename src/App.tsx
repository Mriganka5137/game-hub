function App() {
  return (
    <div className=" grid grid-cols-2">
      <div className="bg-green-300 col-span-2">Nav</div>
      <div className=" bg-red-400 max-lg:hidden">Aside</div>
      <div className=" bg-blue-200 max-lg:col-span-2">Main</div>
    </div>
  );
}

export default App;
