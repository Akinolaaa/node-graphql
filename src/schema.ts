// int, float, string, boolean, ID
/*
  type Query- a special type that defines entry points of a user query
*/
export const typeDefs = `#graphql
  type Game {
    id: ID!
    title: String!
    platform: [String!]!
    reviews: [Review!]
  }

  type Review {
    id: ID!
    rating: Int!
    content: String!
    game: Game!
    author: Author!
  }

  type Author {
    id: ID!
    name: String!
    verified: Boolean!
    reviews: [Review!]
  }

  type Query {
    reviews: [Review]
    review(id: ID!): Review

    games: [Game]
    game(id: ID!): Game

    authors: [Author]
    author(id: ID!): Author
  }

  type Mutation {
    deleteGame(id: ID!): [Game]

    addGame(title: String, platforms: [String]): [Game]

    addGame2(game: AddGameInput!): Game
  }

  input AddGameInput {
    title: String!,
    platform: [String!]!
  }
`;
