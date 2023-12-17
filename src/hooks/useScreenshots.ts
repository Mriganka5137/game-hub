import { Screenshot } from "@/entities/Screenshot";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
    staleTime: 1000 * 60 * 5, // 5 min
  });
};
export default useScreenshots;
