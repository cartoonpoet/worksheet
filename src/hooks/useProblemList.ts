import { PROBLEMS_QUERY_KEY, useGetProblems } from "apis/domain/problems/hook";
import { useProblemStore } from "store/useProblemStore";
import { useQueryClient } from "@tanstack/react-query";
import type { ProblemResponse } from "@/apis/domain/problems";
import { SIMILARITY_QUERY_KEY } from "@/apis/domain/similarity/hook";

type LevelCountType = Record<1 | 2 | 3 | 4 | 5, number>;

const createLevelCountText = (levelCount: LevelCountType) => {
  const levels = [
    { key: 1, label: "하" },
    { key: 2, label: "중하" },
    { key: 3, label: "중" },
    { key: 4, label: "상" },
    { key: 5, label: "최상" },
  ];

  return levels
    .map(
      ({ key, label }) => `${label}${levelCount[key as 1 | 2 | 3 | 4 | 5] || 0}`
    )
    .join(" · ");
};

export const useProblemList = () => {
  const queryClient = useQueryClient();
  const { data: problems = [] } = useGetProblems();
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);

  const setSelectedProblemId = useProblemStore(
    (state) => state.setSelectedProblemId
  );

  const levelCount = problems.reduce((acc, problem) => {
    acc[problem.level] = (acc[problem.level] || 0) + 1;
    return acc;
  }, {} as LevelCountType);
  const problemCount = problems.length;

  const handleDeleteProblem = (problemId: number) => {
    queryClient.setQueryData(
      SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(
        selectedProblemId,
        problems
          .filter((problem) => problem.id !== problemId)
          .map((problem) => problem.id)
      ),
      []
    );
    queryClient.setQueryData(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
      problems.filter((problem) => problem.id !== problemId)
    );
  };

  const handleAddSimilarProblem = (problemId: number) => {
    setSelectedProblemId(problemId);
  };
  const levelCountText = createLevelCountText(levelCount);

  return {
    problemCount,
    problems,
    handleDeleteProblem,
    handleAddSimilarProblem,
    levelCountText,
    selectedProblemId,
  };
};
