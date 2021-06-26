import {
    ApolloClient,
    InMemoryCache,
    useQuery,
    gql
} from "@apollo/client";

export const client = new ApolloClient({
    uri: "http://localhost:8080/graphql",
    cache: new InMemoryCache()
});

export const EXCHANGE_RATES = gql`
  query BankAccounts {
    bankAccounts(filter:{}){
        GetTitle,
        GetUser,
        GetCurrency,
        GetId,
        GetValue,
  }
  }
`;
