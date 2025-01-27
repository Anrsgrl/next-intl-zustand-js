import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const usePersistStore = create(
  persist(
    (set) => ({
      persistBears: 0,
      increasePersistPopulation: () =>
        set((state) => ({ persistBears: state.persistBears + 1 })),
    }),
    {
      name: "persist-data",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default usePersistStore;
