import { create } from "zustand";
import { Genre } from "./entities/Genre";
import { Platform } from "./entities/Platform";

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOptions?: string | null;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  handleSearch: (searchText: string) => void;
  handleSelctedGenre: (genre: Genre | null) => void;
  handleSelectedPlatform: (platform: Platform) => void;
  handleSort: (value: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},
  handleSearch: (searchText) =>
    set(() => ({
      gameQuery: {
        searchText,
      },
    })),
  handleSelctedGenre: (genre) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, genreId: genre?.id },
    })),
  handleSelectedPlatform: (platform) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, platformId: platform.id },
    })),

  handleSort: (value) =>
    set((state) => ({
      gameQuery: { ...state.gameQuery, value },
    })),
}));

export default useGameQueryStore;
