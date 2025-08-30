import { useGetProblems } from "apis/domain/problems/hook";
import { useProblemStore } from "store/useProblemStore";
import { useEffect } from "react";
import { useShallow } from "zustand/shallow";

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
  const { data = [] } = useGetProblems();
  const { problems, selectedProblemId } = useProblemStore(
    useShallow((state) => ({
      problems: state.problems,
      selectedProblemId: state.selectedProblemId,
    }))
  );
  const { setProblems, setSelectedProblemId, setSimilarProblems } =
    useProblemStore(
      useShallow((state) => ({
        setProblems: state.setProblems,
        setSelectedProblemId: state.setSelectedProblemId,
        setSimilarProblems: state.setSimilarProblems,
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
    setSelectedProblemId(0);
    setSimilarProblems([]);
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
