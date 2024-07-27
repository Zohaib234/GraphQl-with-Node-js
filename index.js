import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// types
import { typeDefs } from "./schema.js";

import _db from "./_db.js";

// resolvers

const resolvers = {
  Query: {
    reviews: () => _db.reviews,
    review: (_, { id }) => _db.reviews.find((review) => review.id === id),
    games: () => _db.games,
    game: (_, { id }) => _db.games.find((game) => game.id === id),
    authors: () => _db.authors,
    author: (_, { id }) => _db.authors.find((author) => author.id === id),
  },
  Game: {
    reviews: (parent) =>
      _db.reviews.filter((review) => review.game_id === parent.id),
  },
  Review: {
    author: (parent) =>
      _db.authors.find((author) => author.id === parent.author_id),
    game: (parent) => _db.games.find((game) => game.id === parent.game_id),
  },
  Author: {
    reviews: (parent) =>
      _db.reviews.filter((review) => review.author_id === parent.id),
  },
  Mutation: {
    createReview: (_, { rating, content, author_id, game_id }) => {
      const newReview = {
        id: Math.random().toString(36).substr(2, 9),
        rating,
        content,
        author_id,
        game_id,
      };
      _db.reviews.push(newReview);
      return newReview;
    },
    updateReview: (_, { id, rating, content }) => {
      const review = _db.reviews.find((review) => review.id === id);
      if (!review) {
        throw new Error("Review not found");
      }
      review.rating = rating;
      review.content = content;
      return review;
    },
    deleteReview: (_, { id }) => {
      const index = _db.reviews.findIndex((review) => review.id === id);
      if (index === -1) {
        throw new Error("Review not found");
      }
      _db.reviews.splice(index, 1);
      return { id };
    },
    createGame: (_, { id }) => {
      const newGame = {
        id: Math.random().toString(36).substr(2, 9),
        title,
        platform,
      };
      _db.games.push(newGame);
      return newGame;
    },
    deleteGame: (_, { id }) => {
      const index = _db.games.findIndex((game) => game.id === id);
      if (index === -1) {
        throw new Error("Game not found");
      }
      _db.games.splice(index, 1);
      return { id };
    },
    updateGame: (_, { id }) => {
      const game = _db.games.find((game) => game.id === id);
      if (!game) {
        throw new Error("Game not found");
      }
      return game;
    },
    createAuthor: (_, { id }) => {
      const newAuthor = {
        id: Math.random().toString(36).substr(2, 9),
        name,
        verified,
      };
      _db.authors.push(newAuthor);
      return newAuthor;
    },
    deleteAuthor: (_, { id }) => {
      const index = _db.authors.findIndex((author) => author.id === id);
      if (index === -1) {
        throw new Error("Author not found");
      }
      _db.authors.splice(index, 1);
      return { id };
    },
    updateAuthor: (_, { id }) => {
      const author = _db.authors.find((author) => author.id === id);
      if (!author) {
        throw new Error("Author not found");
      }
      return author;
    },
  },
};

const server = new ApolloServer({
  typeDefs, // typeDef ---- definitions of types of data
  resolvers, // resolvers ---- to handle queries based on type definitions
});

const { url } = await startStandaloneServer(server, {
  listen: { port: 5000 },
});

console.log(`��� Server ready at ${url}`);
