import { useQuery } from "@tanstack/react-query";
import { getSimilarity } from ".";
import { type ProblemType } from "../../../type";

export const SIMILARITY_QUERY_KEY = {
  GET_SIMILARITY_QUERY_KEY: (problemId: number) => ["problems", problemId],
};

interface SimilarityParams {
  selectedProblemId: number;
  excludeProblemId: number[];
}

export const useGetSimilarity = (params: SimilarityParams) => {
  return useQuery<ProblemType[]>({
    queryKey: SIMILARITY_QUERY_KEY.GET_SIMILARITY_QUERY_KEY(
      params.selectedProblemId
    ),
    queryFn: () => getSimilarity(params),
    enabled: params.selectedProblemId > 0 && params.excludeProblemId.length > 0,
  });
};
