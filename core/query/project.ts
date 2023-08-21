import { gql } from "@apollo/client";

export const projectsQuery = (userId: string) => gql`
    query Project {
      project @rest(type: "Project", path: "stage/projects?userId=${userId}") {
        user
        title
        timestamp
      }
    }
  `;

export const projectQuery = (id: string) => gql`
    query Project {
      project @rest(type: "Project", path: "stage/project?id=${id}") {
        hash
        characters
        title
        introduction
      }
    }
`;

export const testProjectQuery = gql`
  query Project {
    project @rest(type: "Project", path: "stage/projects?userId=bhs9158") {
      user
      title
      timestamp
    }
  }
`;
