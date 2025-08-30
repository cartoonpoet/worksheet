import { get } from "../../";
import { API_ENDPOINTS } from "apis/constants/apiPath";

/**
 * 문제 정보를 담는 응답 인터페이스
 * @description GET /problems API의 응답 데이터 구조
 *
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
export interface ProblemResponse {
  /**
   * 문제 고유의 아이디
   * @example 1
   */
  id: number;

  /**
   * 문제의 난이도
   * @description 1:하, 2:중하, 3:중, 4:상, 5:최상
   * @example 4
   */
  level: number;

  /**
   * 문제의 유형
   * @description 1: 객관식, 2: 주관식
   * @example 1
   */
  type: number;

  /**
   * 문제 이미지 경로
   * @example "http://example.com/problem.png"
   */
  problemImageUrl: string;

  /**
   * 문제 제목
   * @example "몫과 나머지 구하기"
   */
  title: string;

  /**
   * 정답률
   * @description 백분율로 표시된 정답률
   * @example 90
   */
  answerRate: number;
}

/**
 * @description 문제 리스트 조회 API
 */
export const getProblems = async () => {
  const response = await get<ProblemResponse[]>(API_ENDPOINTS.GET_PROBLEMS);
  return response.data;
};
