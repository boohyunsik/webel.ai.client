import {ApolloClient, createHttpLink, InMemoryCache} from "@apollo/client";
import {setContext} from "@apollo/client/link/context";

const httpLink = createHttpLink({
    uri: `https://b6eikgyldvetdbz4cca64jimly.appsync-api.ap-northeast-2.amazonaws.com/graphql`,
})

const authLink = setContext((_, { headers }) => {
    const token = `da2-bp45uvgy4rhkjisqnx67rbxfka`;
    return {
        headers: {
            ...headers,
            "x-api-key": "da2-bp45uvgy4rhkjisqnx67rbxfka"
        }
    }
})

const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
});

export default client;