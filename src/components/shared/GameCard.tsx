import { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <div
      className="flex flex-col gap-5 justify-center shadow-md dark:bg-gray-900  rounded-lg overflow-hidden pb-3 hover:scale-105  
    duration-500 hover:-translate-y-2 cursor-pointer "
    >
      <div className=" h-40 w-full flex justify-center items-center overflow-hidden">
        <img src={game.background_image} />
      </div>
      <h2 className="px-5">{game.name}</h2>
    </div>
  );
};

export default GameCard;
