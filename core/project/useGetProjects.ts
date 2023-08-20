import axios from "axios";

export interface GetProjectsProps {
  userId: string;
}

export const useGetProject = async ({ userId }: GetProjectsProps) => {
  const result = await axios.get(
    `https://n79v1mqbd0.execute-api.ap-northeast-2.amazonaws.com/stage/project?userId=${userId}`,
  );

  return result.data;
};
