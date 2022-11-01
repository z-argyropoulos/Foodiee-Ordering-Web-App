import {
  TypedDocumentNode,
  QueryOptions,
  ApolloQueryResult,
  OperationVariables,
} from '@apollo/client';
import client from '@graphql/apolloClient';
import { DocumentNode } from 'graphql';

// Define a query format closer to the useQuery hook for
// fetching data on the server (as you cannot use hooks)
// inside the server side functions. Remove the query
// propery from options and use it as the first argument
const gqlQuery = <TData, TVariables = OperationVariables>(
  query: DocumentNode | TypedDocumentNode<TData, TVariables>,
  options?: Omit<QueryOptions<TVariables, TData>, 'query'>
): Promise<ApolloQueryResult<TData>> =>
  client.query({ query, ...options });
export default gqlQuery;
