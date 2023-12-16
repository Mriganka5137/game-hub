import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import { Genre } from "../entities/Genre";

const apiClient = new APIClient<Genre>("/genres");

const useGenres = () => {
  return useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24 hrs,
  });
};

export default useGenres;
