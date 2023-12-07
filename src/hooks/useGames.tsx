import { GameQuery } from "@/App";
import { useQuery } from "@tanstack/react-query";
import apiClient, { FetchResponse, Platform } from "@/services/api-client";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
}

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: ["games", gameQuery],
    queryFn: () =>
      apiClient
        .get<FetchResponse<Game>>("/games", {
          params: {
            genres: gameQuery.genre?.id,
            parent_platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOptions,
            search: gameQuery.searchText,
          },
        })
        .then((res) => res.data),
  });

export default useGames;
