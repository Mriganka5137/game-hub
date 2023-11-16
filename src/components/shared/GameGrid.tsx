import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, loading } = useGame();
  const skeletonArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading ? (
        <div className="flex flex-wrap justify-center mt-10 gap-9">
          {skeletonArr.map((i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="flex flex-wrap justify-center w-full mt-10 gap-9">
          {data.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GameGrid;
