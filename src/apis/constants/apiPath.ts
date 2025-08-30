export const API_PATH = {
  PLOBLEMS: "problems",
  SIMILARITY: "similarity",
};

// API 엔드포인트 경로
export const API_ENDPOINTS = {
  // 문제 리스트 조회
  GET_PROBLEMS: `/${API_PATH.PLOBLEMS}`,

  // 유사문제 리스트 조회
  GET_SIMILARITY: (problemId: number) =>
    `/${API_PATH.PLOBLEMS}/${problemId}/${API_PATH.SIMILARITY}`,
} as const;
