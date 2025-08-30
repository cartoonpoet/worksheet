import { useProblemStore } from "store/useProblemStore";
import {
  SIMILARITY_QUERY_KEY,
  useGetSimilarity,
} from "apis/domain/similarity/hook";
import { useQueryClient } from "@tanstack/react-query";
import { type ProblemType } from "../type";
import { PROBLEMS_QUERY_KEY } from "apis/domain/problems/hook";

export const useSimilarProblemList = () => {
  const queryClient = useQueryClient();
  const problems =
    queryClient.getQueryData<ProblemType[]>(
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

  const getActiveProblemIndex = () => {
    return problems.findIndex((p) =>
      [selectedProblemId, replacedProblemId].includes(p.id)
    );
  };

  const updateProblemsCache = (newProblems: ProblemType[]) => {
    queryClient.setQueryData(
      PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
      newProblems
    );
  };

  const updateSimilarProblemsCache = (newSimilarProblems: ProblemType[]) => {
    queryClient.setQueryData(
      SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(selectedProblemId),
      newSimilarProblems
    );
  };

  const handleAddProblem = (problemId: number) => {
    const activeIndex = getActiveProblemIndex();
    if (activeIndex === -1) return;

    const findProblemInfo = similarProblems.find((p) => p.id === problemId);
    if (!findProblemInfo) return;

    const newProblems = problems.filter((p) => p.id !== problemId);
    newProblems.splice(activeIndex + 1, 0, findProblemInfo);

    updateProblemsCache(newProblems);
    updateSimilarProblemsCache(
      similarProblems.filter((p) => p.id !== problemId)
    );
  };

  const handleReplaceProblem = (problemId: number) => {
    setReplacedProblemId(problemId);
    const activeProblemIndex = getActiveProblemIndex();
    if (activeProblemIndex === -1) return;
    const activeProblemInfo = problems[activeProblemIndex];

    const similarProblemIndex = similarProblems.findIndex(
      (p) => p.id === problemId
    );
    if (similarProblemIndex === -1) return;
    const tempProblem = similarProblems[similarProblemIndex];

    const newProblems = [...problems];
    newProblems[activeProblemIndex] = tempProblem;

    const newSimilarProblems = [...similarProblems];
    newSimilarProblems[similarProblemIndex] = activeProblemInfo;

    updateProblemsCache(newProblems);
    updateSimilarProblemsCache(newSimilarProblems);
  };

  return { similarProblems, handleAddProblem, handleReplaceProblem };
};
