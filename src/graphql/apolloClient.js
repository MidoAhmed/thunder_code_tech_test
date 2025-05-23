import {
  ApolloClient,
  InMemoryCache,
  ApolloLink,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { useAuth0 } from "@auth0/auth0-react";

const client = new ApolloClient({
  uri: "https://container-app-api-nqcntpxkdeehw.lemonwater-24ce1357.westus.azurecontainerapps.io/graphql/",
  cache: new InMemoryCache(),
});

export default client;
