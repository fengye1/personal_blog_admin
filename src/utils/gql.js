import gql from "graphql-tag";

export const fetchUser=gql`
  query fetchUsers{
    users{
      pageInfo{
        startCursor
        endCursor
        hasNextPage
        hasPreviousPage
      }
      edges{
        node{
          createdDate
          isAdmin
          rid
          id
          name
          email        
        }
      }
    }
  }
  `

export const loginGql = gql`
    mutation($email:String!,$password:String!){
      login(email:$email,password:$password){
        accessToken
        success
        message
        code
      }
    }
`
  
