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
  problemId: number;
  excludeProblemId: number[];
}

export const useGetSimilarity = (params: SimilarityParams) => {
  return useQuery<ProblemResponse[]>({
    queryKey: SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(
      params.problemId,
      params.excludeProblemId
    ),
    queryFn: () => getSimilarity(params),
  });
};
