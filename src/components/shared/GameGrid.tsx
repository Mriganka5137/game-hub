import useGame from "@/hooks/useGames";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <div className="grid grid-cols-3 gap-9 mt-10 max-sm:grid-cols-1 max-md:grid-cols-2">
        {games.map((game) => (
          <GameCard game={game} key={game.id} />
        ))}
      </div>
    </>
  );
};

export default GameGrid;
