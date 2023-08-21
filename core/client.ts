import { ApolloClient, InMemoryCache } from "@apollo/client";
import { RestLink } from "apollo-link-rest";

const apiLink = new RestLink({
  uri: `https://n79v1mqbd0.execute-api.ap-northeast-2.amazonaws.com/`,
});

export const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: `https://n79v1mqbd0.execute-api.ap-northeast-2.amazonaws.com/`,
});
