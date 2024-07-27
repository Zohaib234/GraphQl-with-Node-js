export const typeDefs = `#graphql 
type Game {
 id: ID!
 title: String!
 platform: [String!]!
 reviews: [Review!]
}
type Review {
   id: ID!
   rating: Int!,
   content: String!
   author: Author!
   game: Game!
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
    createReview(rating: Int!, content: String!, author_id: ID!, game_id: ID!): Review
    updateReview(id: ID!, rating: Int!, content: String!): Review
    deleteReview(id: ID!): Review
    createGame(title: String!, platform: [String!]!): Game
    updateGame(id: ID!, title: String!, platform: [String!]!): Game
    deleteGame(id: ID!): Game
    createAuthor(name: String!, verified: Boolean!): Author
    updateAuthor(id: ID!, name: String!, verified: Boolean!): Author
    deleteAuthor(id: ID!): Author
}
`;
