import GameGrid from "@/components/shared/GameGrid";
import GameHeading from "@/components/shared/GameHeading";
import GenreList from "@/components/shared/GenreList";
import PlatformList from "@/components/shared/PlatformList";
import SortSelector from "@/components/shared/SortSelector";

const HomePage = () => {
  return (
    <div className="flex ">
      <div className="w-[350px] max-lg:hidden pt-10 pl-5  shadow-lg bg-secondary/40">
        <h1 className="p-1 mb-3 text-2xl font-semibold">Genres</h1>
        <GenreList />
      </div>

      <div className="flex flex-col w-full gap-8 py-10 mx-auto bg-secondary/30 max-w-7xl ">
        <GameHeading />
        <div className="flex w-full gap-5 px-5">
          <PlatformList />
          <SortSelector />
        </div>
        <GameGrid />
      </div>
    </div>
  );
};

export default HomePage;
