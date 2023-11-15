import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGame();
  const skeletonArr = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {loading && (
        <div className="flex flex-wrap mt-10 gap-9">
          {skeletonArr.map((i) => (
            <GameCardSkeleton key={i} />
          ))}
        </div>
      )}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 mt-10 gap-9 max-sm:grid-cols-1 max-md:grid-cols-2">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
