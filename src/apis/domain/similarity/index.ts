import { get } from "../..";
import { API_ENDPOINTS } from "apis/constants/apiPath";
import { type ProblemResponse } from "../problems";

interface SimilarityParams {
  selectedProblemId: number;
  excludeProblemId: number[];
}

/**
 * @description 유사문제 리스트 조회 API
 */
export const getSimilarity = async (params: SimilarityParams) => {
  const response = await get<ProblemResponse[]>(
    API_ENDPOINTS.GET_SIMILARITY(params.selectedProblemId),
    {
      params: {
        excludedProblemIds: params.excludeProblemId.join(","),
      },
    }
  );
  return response.data;
};
