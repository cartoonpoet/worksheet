import { useQuery } from "@tanstack/react-query";
import { getSimilarity } from ".";
import { type ProblemResponse } from "../problems";

export const SIMILARITY_QUERY_KEY = {
  GET_SIMILARITY_QUERY_KEY: (problemId: number, excludeProblemId: number[]) => [
    "problems",
    problemId,
    excludeProblemId,
  ],
};

interface SimilarityParams {
  selectedProblemId: number;
  excludeProblemId: number[];
}

export const useGetSimilarity = (params: SimilarityParams) => {
  return useQuery<ProblemResponse[]>({
    queryKey: SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(
      params.selectedProblemId,
      params.excludeProblemId
    ),
    queryFn: () => getSimilarity(params),
    enabled: params.selectedProblemId > 0 && params.excludeProblemId.length > 0,
  });
};
