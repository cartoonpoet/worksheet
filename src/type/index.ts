export interface ProblemType {
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
  level: 1 | 2 | 3 | 4 | 5;

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

export type LevelType = 1 | 2 | 3 | 4 | 5;
export type LevelCountType = Record<LevelType, number>;
