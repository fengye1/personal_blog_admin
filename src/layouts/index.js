import BaseLayout from './layout';
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://127.0.0.1:5000/graphql"
});

function BasicLayout(props) {
  return <ApolloProvider client={client}>
   {
      props.location.pathname=== '/login'?
      <div>{props.children}</div>:
<BaseLayout children={props.children} />
   }
</ApolloProvider>
 
}


export default BasicLayout;
