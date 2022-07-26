import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl62hjuhv657g01t38c77gzfe/master',
  cache : new InMemoryCache()
})