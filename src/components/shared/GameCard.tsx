import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div
      className="flex flex-col gap-5 justify-start shadow dark:bg-gray-900  rounded-lg overflow-hidden pb-8 hover:scale-105  
    duration-500 hover:-translate-y-2 cursor-pointer hover:shadow-md dark:shadow-sky-400 dark:hover:drop-shadow-md"
    >
      <div className="w-full flex justify-center items-start overflow-hidden h-36 ">
        <img src={game.background_image} />
      </div>
      <h2 className="px-5 text-xl font-bold dark:text-slate-200 text-slate-700 line-clamp-1">
        {game.name}
      </h2>
      <div className=" flex gap-2 px-5 flex-wrap text-slate-500">
        <PlatformIconList
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </div>
    </div>
  );
};

export default GameCard;
