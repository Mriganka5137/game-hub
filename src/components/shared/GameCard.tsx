import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div className="flex flex-col justify-start gap-5 pb-8 overflow-hidden duration-500 rounded-lg shadow cursor-pointer dark:bg-gray-900 hover:scale-105 hover:-translate-y-2 hover:shadow-md dark:shadow-sky-400 dark:hover:drop-shadow-md">
      <div className="flex items-start justify-center w-full overflow-hidden h-36 ">
        <img src={game.background_image} />
      </div>
      <h2 className="px-5 text-xl font-bold dark:text-slate-200 text-slate-700 line-clamp-1">
        {game.name}
      </h2>
      <div className="flex items-center justify-between pr-3">
        <div className="flex flex-wrap gap-2 px-5 text-slate-500">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
        <CriticScore score={game.metacritic} />
      </div>
    </div>
  );
};

export default GameCard;
