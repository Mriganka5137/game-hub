import { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const genre = useGenre(gameQuery?.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <h1 className="px-5 text-4xl font-bold text-secondary-foreground max-md:text-3xl max-sm:text-2xl">
      {heading}
    </h1>
  );
};

export default GameHeading;
