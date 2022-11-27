import { ApolloClient, InMemoryCache } from '@apollo/client';
import { NEXT_PUBLIC_CUSTOM_FOODIEE_GRAHPQL_API } from '@customEnvs';

const client = new ApolloClient({
  uri: NEXT_PUBLIC_CUSTOM_FOODIEE_GRAHPQL_API,
  cache: new InMemoryCache(),
});

export default client;
