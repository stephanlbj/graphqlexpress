import {gql} from "apollo-server-express";



const userSchema = gql`

type AddUserResponse {
  success: Boolean!
  user: User
  message: String
}

  type User {
    id: ID!
    name: String!
    email: String!
  }


type Group {
  id: ID!
  name: String!
  members: [User]
}


  type Query {
    users: [User]
    user(id:ID!) : User
    groups: [Group!]!

  }


  type Mutation {
    deleteUser(id:ID!):[User]
    addUser(user:AddUser!): AddUserResponse
    updateUser(id:ID!, user:UpdateUser!):AddUserResponse
  }

  input AddUser {
    name: String!
    email: String!
  }

  input UpdateUser {
    name: String
    email: String
  }

`;

export default userSchema
