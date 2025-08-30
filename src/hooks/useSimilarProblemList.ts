import { useProblemStore } from "store/useProblemStore";
import {
  SIMILARITY_QUERY_KEY,
  useGetSimilarity,
} from "apis/domain/similarity/hook";
import { useQueryClient } from "@tanstack/react-query";
import type { ProblemResponse } from "apis/domain/problems";
import { PROBLEMS_QUERY_KEY } from "apis/domain/problems/hook";

export const useSimilarProblemList = () => {
  const queryClient = useQueryClient();
  const problems =
    queryClient.getQueryData<ProblemResponse[]>(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY()
    ) || [];
  const selectedProblemId = useProblemStore((state) => state.selectedProblemId);
  const replacedProblemId = useProblemStore((state) => state.replacedProblemId);
  const setReplacedProblemId = useProblemStore(
    (state) => state.setReplacedProblemId
  );

  const excludeProblemId = problems
    .filter((problem) => problem.id !== selectedProblemId)
    .map((problem) => problem.id);

  const { data: similarProblems = [] } = useGetSimilarity({
    selectedProblemId,
    excludeProblemId,
  });

  const handleAddProblem = (problemId: number) => {
    // 1. active된 문제의 인덱스 찾기
    const activeIndex = problems.findIndex((p) =>
      [selectedProblemId, replacedProblemId].includes(p.id)
    );
    if (activeIndex === -1) return; // active된 문제가 없으면 리턴

    // 2. 메인 문제 리스트에 active된 문제 바로 앞에 유사문제 추가
    const findProblemInfo = similarProblems.find((p) => p.id === problemId);
    if (!findProblemInfo) return;

    const newProblems = problems.filter((p) => p.id !== problemId);
    newProblems.splice(activeIndex + 1, 0, findProblemInfo);

    queryClient.setQueryData(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
      newProblems
    );

    queryClient.setQueryData(
      SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(selectedProblemId),
      similarProblems.filter((p) => p.id !== problemId)
    );
  };

  const handleReplaceProblem = (problemId: number) => {
    setReplacedProblemId(problemId);
    const activeProblemIndex = problems.findIndex((p) =>
      [selectedProblemId, replacedProblemId].includes(p.id)
    );
    if (activeProblemIndex === -1) return;
    const activeProblemInfo = problems[activeProblemIndex];

    const similarProblemIndex = similarProblems.findIndex(
      (p) => p.id === problemId
    );
    if (similarProblemIndex === -1) return;
    const tempProblem = similarProblems[similarProblemIndex];

    // 새로운 배열 생성 (불변성 유지)
    const newProblems = [...problems];
    newProblems[activeProblemIndex] = tempProblem;

    const newSimilarProblems = [...similarProblems];
    newSimilarProblems[similarProblemIndex] = activeProblemInfo;

    queryClient.setQueryData(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
      newProblems
    );

    queryClient.setQueryData(
      SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(selectedProblemId),
      newSimilarProblems
    );
  };

  return { similarProblems, handleAddProblem, handleReplaceProblem };
};
