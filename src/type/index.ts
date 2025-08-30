export interface ProblemType {
  id: number;
  level: 1 | 2 | 3 | 4 | 5;
  type: number;
  problemImageUrl: string;
  title: string;
  answerRate: number;
}
