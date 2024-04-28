import { create } from "zustand";

interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platform: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchText: (searchText: string) => void;
    setReset: () => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
    gameQuery: {},
    setSearchText: (searchText) => set( () => ({gameQuery: { searchText }})),
    setGenreId: (genreId) => set( store => ({gameQuery: {...store.gameQuery, genreId }})),
    setPlatformId: (platformId) => set( store => ({gameQuery: {...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder) => set( store => ({gameQuery: {...store.setSortOrder, sortOrder}})),
    setReset: () => set( store => ({gameQuery: {}})),
}));

export default useGameQueryStore;