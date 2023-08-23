import { gql } from "@apollo/client";

export const projectsQuery = gql`
    query projects {
        listWebel_projects {
            items {
                id
                owner
                createdAt
            }
        }
    }
`;

export const projectDetailQuery = (projectId: string) => gql`
    query ProjectDetail {
        listWebelProjectDetails(filter: {projectId: {eq: ${projectId}}}) {
            items {
                id
                introduction
                projectId
                title
            }
        }
    }
`;