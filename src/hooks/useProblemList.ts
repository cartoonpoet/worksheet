import { PROBLEMS_QUERY_KEY, useGetProblems } from "apis/domain/problems/hook";
import { useProblemStore } from "store/useProblemStore";
import { useQueryClient } from "@tanstack/react-query";
import { SIMILARITY_QUERY_KEY } from "apis/domain/similarity/hook";
import { useShallow } from "zustand/shallow";
import { type LevelType, type LevelCountType } from "../type";

const createLevelCountText = (levelCount: LevelCountType) => {
  const levels = [
    { key: 1, label: "하" },
    { key: 2, label: "중하" },
    { key: 3, label: "중" },
    { key: 4, label: "상" },
    { key: 5, label: "최상" },
  ];

  return levels
    .filter(({ key }) => levelCount[key as LevelType] > 0)
    .map(({ key, label }) => `${label}${levelCount[key as LevelType]}`)
    .join(" · ");
};

export const useProblemList = () => {
  const queryClient = useQueryClient();
  const { data: problems = [] } = useGetProblems();
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const replacedProblemId = useProblemStore((state) => state.replacedProblemId);

  const { setSelectedProblemId, setReplacedProblemId } = useProblemStore(
    useShallow((state) => ({
      setSelectedProblemId: state.setSelectedProblemId,
      setReplacedProblemId: state.setReplacedProblemId,
    }))
  );

  const levelCount = problems.reduce((acc, problem) => {
    acc[problem.level] = (acc[problem.level] || 0) + 1;
    return acc;
  }, {} as LevelCountType);
  const problemCount = problems.length;

  const handleDeleteProblem = (problemId: number) => {
    setReplacedProblemId(0);
    setSelectedProblemId(0);
    queryClient.setQueryData(
      SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(selectedProblemId),
      []
    );
    queryClient.setQueryData(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
      problems.filter((problem) => problem.id !== problemId)
    );
  };

  const handleAddSimilarProblem = (problemId: number) => {
    setSelectedProblemId(problemId);
    setReplacedProblemId(0);
  };
  const levelCountText = createLevelCountText(levelCount);
  return {
    problemCount,
    problems,
    handleDeleteProblem,
    handleAddSimilarProblem,
    levelCountText,
    selectedProblemId,
    replacedProblemId,
  };
};
