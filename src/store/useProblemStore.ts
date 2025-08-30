import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import type { ProblemType } from "../type";

interface ProblemStore {
  problems: ProblemType[];
  similarProblems: ProblemType[];
  selectedProblemId: number;
}

interface ProblemStoreActions {
  setProblems: (problems: ProblemType[]) => void;
  setSimilarProblems: (similarProblems: ProblemType[]) => void;
  setSelectedProblemId: (selectedProblemId: number) => void;
}

export const useProblemStore = create<ProblemStore & ProblemStoreActions>()(
  devtools(
    immer((set) => ({
      selectedProblemId: 0,
      problems: [],
      similarProblems: [],
      setProblems: (problems: ProblemType[]) => set({ problems }),
      setSimilarProblems: (similarProblems: ProblemType[]) =>
        set({ similarProblems }),
      setSelectedProblemId: (selectedProblemId: number) =>
        set({ selectedProblemId }),
    })),
    { name: "problemStore" }
  )
);
