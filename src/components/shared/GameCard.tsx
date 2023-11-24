import { Game } from "@/hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "@/utils/image-url";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div
      className="flex flex-col justify-start w-full gap-4 pb-8 overflow-hidden duration-500  rounded-lg shadow cursor-pointer dark:bg-gray-900 hover:scale-105 hover:-translate-y-2 hover:shadow-md dark:shadow-sky-400 dark:hover:drop-shadow-md 
    sm:w-[280px] font-poppins "
    >
      <img src={getCroppedImageUrl(game.background_image)} className="" />

      <div className="flex items-center justify-between pr-3">
        <div className="flex flex-wrap gap-1 px-5 text-slate-500">
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
        </div>
        <CriticScore score={game.metacritic} />
      </div>
      <h2 className="px-5 text-2xl font-semibold dark:text-slate-200 text-slate-700 line-clamp-1">
        {game.name}
      </h2>
    </div>
  );
};

export default GameCard;
