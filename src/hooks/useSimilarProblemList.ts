import { useEffect } from "react";
import { useProblemStore } from "store/useProblemStore";
import { useGetSimilarity } from "apis/domain/similarity/hook";
import { useShallow } from "zustand/shallow";

export const useSimilarProblemList = () => {
  const { selectedProblemId, problems, similarProblems } = useProblemStore(
    useShallow((state) => ({
      selectedProblemId: state.selectedProblemId,
      problems: state.problems,
      similarProblems: state.similarProblems,
    }))
  );
  const { setSimilarProblems, setProblems, setSelectedProblemId } =
    useProblemStore(
      useShallow((state) => ({
        setSimilarProblems: state.setSimilarProblems,
        setProblems: state.setProblems,
        setSelectedProblemId: state.setSelectedProblemId,
      }))
    );
  const { data = [] } = useGetSimilarity({
    selectedProblemId,
    excludeProblemId: problems
      .filter((problem) => problem.id !== selectedProblemId)
      .map((problem) => problem.id),
  });

  useEffect(() => {
    if (data.length > 0) setSimilarProblems(data);
  }, [data]);

  const handleAddProblem = (problemId: number) => {
    // 1. active된 문제의 인덱스 찾기
    const activeIndex = problems.findIndex((p) => p.id === selectedProblemId);
    if (activeIndex === -1) return; // active된 문제가 없으면 리턴

    // 2. 메인 문제 리스트에 active된 문제 바로 앞에 유사문제 추가
    const findProblemInfo = similarProblems.find((p) => p.id === problemId);
    if (!findProblemInfo) return;
    const newProblems = [...problems];
    newProblems.splice(activeIndex, 0, findProblemInfo);
    setProblems(newProblems);

    // 3. 유사문제 리스트에서 해당 문제 삭제
    setSimilarProblems(similarProblems.filter((p) => p.id !== problemId));
  };

  const handleReplaceProblem = (problemId: number) => {
    const activeProblemIndex = problems.findIndex(
      (p) => p.id === selectedProblemId
    );
    if (activeProblemIndex === -1) return;
    const activeProblemInfo = problems[activeProblemIndex];

    const similarProblemIndex = similarProblems.findIndex(
      (p) => p.id === problemId
    );
    if (similarProblemIndex === -1) return;
    const tempProblem = similarProblems[similarProblemIndex];
    similarProblems[similarProblemIndex] = activeProblemInfo;
    problems[activeProblemIndex] = tempProblem;
    setProblems([...problems]);
    setSimilarProblems([...similarProblems]);
    setSelectedProblemId(problemId);
  };

  return { similarProblems, handleAddProblem, handleReplaceProblem };
};
