import { create } from "zustand";
import { immer } from "zustand/middleware/immer";
import { devtools } from "zustand/middleware";
import type { ProblemType } from "../type";

interface ProblemStore {
  problems: ProblemType[];
  similarProblems: ProblemType[];
  problemId: number[];
  excludeProblemId: number[];
}

interface ProblemStoreActions {
  setProblems: (problems: ProblemType[]) => void;
  setSimilarProblems: (similarProblems: ProblemType[]) => void;
  addProblemId: (problemId: number) => void;
  setExcludeProblemId: (excludeProblemId: number[]) => void;
}

export const useProblemStore = create<ProblemStore & ProblemStoreActions>()(
  devtools(
    immer((set) => ({
      problemId: [],
      excludeProblemId: [],
      problems: [],
      similarProblems: [],
      setProblems: (problems: ProblemType[]) => set({ problems }),
      setSimilarProblems: (similarProblems: ProblemType[]) =>
        set({ similarProblems }),
      addProblemId: (problemId: number) =>
        set((state) => {
          state.problemId.push(problemId);
          return state;
        }),
      setExcludeProblemId: (excludeProblemId: number[]) =>
        set({ excludeProblemId }),
    })),
    { name: "problemStore" }
  )
);
