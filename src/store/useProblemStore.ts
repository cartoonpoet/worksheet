import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";

interface ProblemStore {
  selectedProblemId: number;
  replacedProblemId: number;
}

interface ProblemStoreActions {
  setSelectedProblemId: (selectedProblemId: number) => void;
  setReplacedProblemId: (replacedProblemId: number) => void;
}

export const useProblemStore = create<ProblemStore & ProblemStoreActions>()(
  devtools(
    immer((set) => ({
      selectedProblemId: 0,
      replacedProblemId: 0,
      setSelectedProblemId: (selectedProblemId: number) =>
        set({ selectedProblemId }),
      setReplacedProblemId: (replacedProblemId: number) =>
        set({ replacedProblemId }),
    })),
    { name: "problemStore" }
  )
);
