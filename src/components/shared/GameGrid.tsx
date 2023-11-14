import useGame from "@/hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGame();
  return (
    <>
      {error && <p>{error}</p>}
      <ul>
        {games.map((game, index) => (
          <li key={game.id}>
            {index + 1}. {game.name}
          </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
