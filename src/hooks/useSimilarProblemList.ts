import { useProblemStore } from "store/useProblemStore";
import { useGetSimilarity } from "apis/domain/similarity/hook";
import { useQueryClient } from "@tanstack/react-query";
import type { ProblemResponse } from "@/apis/domain/problems";
import { PROBLEMS_QUERY_KEY } from "@/apis/domain/problems/hook";

export const useSimilarProblemList = () => {
  const queryClient = useQueryClient();
  const problems =
    queryClient.getQueryData<ProblemResponse[]>(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY()
    ) || [];
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const setSelectedProblemId = useProblemStore(
    (state) => state.setSelectedProblemId
  );
  const { data: similarProblems = [] } = useGetSimilarity({
    selectedProblemId,
    excludeProblemId: problems
      .filter((problem) => problem.id !== selectedProblemId)
      .map((problem) => problem.id),
  });

  const handleAddProblem = (problemId: number) => {
    // 1. active된 문제의 인덱스 찾기
    const activeIndex = problems.findIndex((p) => p.id === selectedProblemId);
    if (activeIndex === -1) return; // active된 문제가 없으면 리턴

    // 2. 메인 문제 리스트에 active된 문제 바로 앞에 유사문제 추가
    const findProblemInfo = similarProblems.find((p) => p.id === problemId);
    if (!findProblemInfo) return;
    const newProblems = [...problems];
    newProblems.splice(activeIndex, 0, findProblemInfo);
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
    setSelectedProblemId(problemId);
  };

  return { similarProblems, handleAddProblem, handleReplaceProblem };
};
