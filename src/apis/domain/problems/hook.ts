import { useQuery } from "@tanstack/react-query";
import { getProblems, type ProblemResponse } from ".";

export const PROBLEMS_QUERY_KEY = {
  GET_PROBLEMS_QUERY_KEY: () => ["problems"],
};

export const useGetProblems = () => {
  return useQuery<ProblemResponse[]>({
    queryKey: PROBLEMS_QUERY_KEY.GET_PROBLEMS_QUERY_KEY(),
    queryFn: getProblems,
  });
};
