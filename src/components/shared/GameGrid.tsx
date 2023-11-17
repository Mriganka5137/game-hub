import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import { Genre } from "@/hooks/useGenres";
import useGames from "@/hooks/useGames";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre }: Props) => {
  const { data, error, loading } = useGames(selectedGenre);
  const skeletonArr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
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
        <div className="flex flex-wrap justify-center gap-9 ">
          {data.map((game) => (
            <GameCard game={game} key={game.id} />
          ))}
        </div>
      )}
    </>
  );
};

export default GameGrid;
