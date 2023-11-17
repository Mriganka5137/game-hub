import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import useGames from "@/hooks/useGames";
import { GameQuery } from "@/App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, error, loading } = useGames(gameQuery);
  const skeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <>
      {loading ? (
        <div className="flex flex-wrap justify-start px-5 gap-9">
          {skeletonArr.map((i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-wrap justify-start px-5 gap-9">
          {data.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GameGrid;
