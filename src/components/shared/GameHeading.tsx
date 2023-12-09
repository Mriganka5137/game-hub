import { GameQuery } from "@/App";
import useGenres from "@/hooks/useGenres";
import usePlatforms from "@/hooks/usePlatforms";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const platform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;
  return (
    <h1 className="px-5 text-4xl font-bold text-secondary-foreground max-md:text-3xl max-sm:text-2xl">
      {heading}
    </h1>
  );
};

export default GameHeading;
