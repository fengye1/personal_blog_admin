import BaseLayout from './layout';
import { ApolloClient } from 'apollo-client';
import { ApolloProvider } from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';

const httpLink = createHttpLink({
  uri:  "http://127.0.0.1:5000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('BlogToken');
  return {
    headers: {
      ...headers,
      authorization: token ? token : "",
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});


function BasicLayout(props) {
  return <ApolloProvider client={client}>
   {
      props.location.pathname=== '/login'
      ?
        <div>{props.children}</div>
      :
        <BaseLayout children={props.children} />
   }
</ApolloProvider>
}

export default BasicLayout;
