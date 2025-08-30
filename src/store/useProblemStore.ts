import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface ProblemStore {
  selectedProblemId: number;
}

interface ProblemStoreActions {
  setSelectedProblemId: (selectedProblemId: number) => void;
}

export const useProblemStore = create<ProblemStore & ProblemStoreActions>()(
  devtools(
    immer((set) => ({
      selectedProblemId: 0,
      setSelectedProblemId: (selectedProblemId: number) =>
        set({ selectedProblemId }),
    })),
    { name: "problemStore" }
  )
);
