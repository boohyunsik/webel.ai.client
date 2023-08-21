import { useQuery, gql } from "@apollo/client";

export interface GetProjectsProps {
  userId: string;
}

const q = gql`
  query Project {
    project @rest(type: "Project", path: "stage/project?userId=bhs9158") {
      user
      title
      timestamp
    }
  }
`;

export const useGetProject = ({ userId }: GetProjectsProps) => {
  const { loading, error, data } = useQuery(q);
  if (loading) {
    console.log(`loading...`);
    return [];
  }

  if (error) {
    console.log(`error`, error);
    return [];
  }

  return data.project;
};
