import { Game } from "@/entities/Game";
import CriticScore from "./CriticScore";
import DefinitionItem from "./DefinitionItem";
interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
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
  );
};

export default GameAttributes;
