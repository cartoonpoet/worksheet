import { useGetProblems } from "apis/domain/problems/hook";
import { useProblemStore } from "store/useProblemStore";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

type LevelCountType = Record<1 | 2 | 3 | 4 | 5, number>;

export const useProblemList = () => {
  const { data = [] } = useGetProblems();
  const problems = useProblemStore((state) => state.problems);
  const { setProblems, addProblemId } = useProblemStore(
    useShallow((state) => ({
      setProblems: state.setProblems,
      addProblemId: state.addProblemId,
    }))
  );

  useEffect(() => {
    if (data.length > 0) setProblems(data);
  }, [data]);

  const levelCount = problems.reduce((acc, problem) => {
    acc[problem.level] = (acc[problem.level] || 0) + 1;
    return acc;
  }, {} as LevelCountType);
  const problemCount = problems.length;

  const handleDeleteProblem = (problemId: number) => {
    setProblems(problems.filter((problem) => problem.id !== problemId));
  };

  const handleAddSimilarProblem = (problemId: number) => {
    addProblemId(problemId);
  };

  return {
    levelCount,
    problemCount,
    problems,
    handleDeleteProblem,
    handleAddSimilarProblem,
  };
};
