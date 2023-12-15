import APIClient from "@/services/api-client";
import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { Game } from "./useGames";

const apiClient = new APIClient<Game>("/games");
const useGame = (slug: string) =>
  useQuery({
    queryKey: ["games", slug],
    queryFn: () => apiClient.get(slug),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 5, // 5 min
  });

export default useGame;
