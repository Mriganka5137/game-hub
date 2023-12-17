import ExpandableText from "@/components/shared/ExpandableText";
import GameAttributes from "@/components/shared/GameAttributes";
import GameScreenshots from "@/components/shared/GameScreenshots";
import GameTrailer from "@/components/shared/GameTrailer";
import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner width={25} height={25} />;
  if (error || !game) throw error;

  return (
    <div className=" bg-secondary/30">
      <div className="flex w-screen min-h-screen gap-5 p-10 mx-auto max-w-7xl max-md:p-5 max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <h1 className="mb-3 text-4xl font-medium">{game.name}</h1>
          <ExpandableText>{game.description_raw}</ExpandableText>
          <GameAttributes game={game} />
        </div>
        <div className="w-1/2 max-md:w-full">
          <GameTrailer gameId={game.id} />
          <GameScreenshots gameId={game.id} />
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
