import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useGameQueryStore from "@/store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const genre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const platform = usePlatform(platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <h1 className="px-5 text-4xl font-bold text-secondary-foreground max-md:text-3xl max-sm:text-2xl">
      {heading}
    </h1>
  );
};

export default GameHeading;
