import axios from "axios";

export const api = axios.create({
  baseURL: "https://assignment.mathflat.com/",
});

//더욱 빠르게 api 요청을 할 수 있도록 작성된 유틸 함수
export const get = <T>(...args: Parameters<typeof api.get>) => {
  return api.get<T>(...args);
};
