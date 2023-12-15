import useGame from "@/hooks/useGame";
import { Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetails = () => {
  const { slug } = useParams();
  const { data: game, error, isLoading } = useGame(slug!);
  if (isLoading) return <Spinner />;
  if (error || !game) throw error;
  return (
    <div className="w-full h-screen p-10 mx-auto bg-secondary/30 max-w-7xl max-md:p-5">
      <h1 className="mb-3 text-4xl ">{game.name}</h1>
      <p className="text-base leading-8 text-primary/70">
        {game.description_raw}
      </p>
    </div>
  );
};

export default GameDetails;
