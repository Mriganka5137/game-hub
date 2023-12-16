import CriticScore from "@/components/shared/CriticScore";
import DefinitionItem from "@/components/shared/DefinitionItem";
import ExpandableText from "@/components/shared/ExpandableText";
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
      <div className="w-screen min-h-screen p-10 mx-auto max-w-7xl max-md:p-5">
        <h1 className="mb-3 text-4xl font-medium">{game.name}</h1>
        <ExpandableText>{game.description_raw}</ExpandableText>
        <div className="grid grid-cols-2 gap-10 mt-5">
          <DefinitionItem term="Platforms">
            {game.parent_platforms?.map(({ platform }) => (
              <p key={platform.id}>{platform.name}</p>
            ))}
          </DefinitionItem>

          <DefinitionItem term="Metascore">
            <CriticScore score={game.metacritic} />
          </DefinitionItem>

          <DefinitionItem term="Genres">
            {game.genres.map((genre) => (
              <p key={genre.id}>{genre.name}</p>
            ))}
          </DefinitionItem>

          <DefinitionItem term="Publishers">
            {game.publishers.map((p) => (
              <p>{p.name}</p>
            ))}
          </DefinitionItem>
        </div>
      </div>
    </div>
  );
};

export default GameDetails;
