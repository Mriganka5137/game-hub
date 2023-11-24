import { GameQuery } from "@/App";

const GameHeading = ({ gameQuery }: { gameQuery: GameQuery }) => {
  const heading = `${gameQuery.platform?.name || ""} ${
    gameQuery.genre?.name || ""
  } Games`;
  return (
    <h1 className="px-5 text-4xl font-bold text-secondary-foreground max-md:text-3xl max-sm:text-2xl">
      {heading}
    </h1>
  );
};

export default GameHeading;
