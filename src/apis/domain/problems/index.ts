import { get } from "../../";
import { API_ENDPOINTS } from "apis/constants/apiPath";
import { type ProblemType } from "../../../type";

/**
 * 문제 정보를 담는 응답 인터페이스
 * @description GET /problems API의 응답 데이터 구조
 *@description 문제 리스트 조회 API
 * @example
 * ```json
 * {
 *   "id": 1,
 *   "level": 4,
 *   "type": 1,
 *   "problemImageUrl": "http://example.com/problem.png",
 *   "title": "몫과 나머지 구하기",
 *   "answerRate": 90
 * }
 * ```
 */
export const getProblems = async () => {
  const response = await get<ProblemType[]>(API_ENDPOINTS.GET_PROBLEMS);
  return response.data;
};
