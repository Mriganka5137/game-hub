import apiClient from "@/services/api-client";
import { useEffect, useState } from "react";

interface Game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  }, []);

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
