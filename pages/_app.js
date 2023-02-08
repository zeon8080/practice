import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { Global } from "@emotion/react";
import { globalStyles } from "./src/commons/styles/globalStyles";
import Layout from "./src/components/commons/layout";

export default function App({ Component }) {
  const client = new ApolloClient({
    uri: "http://backend-practice.codebootcamp.co.kr/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <ApolloProvider client={client}>
      <>
        <Global styles={globalStyles} />
        <Layout>
          <Component />
        </Layout>
      </>
    </ApolloProvider>
  );
}
