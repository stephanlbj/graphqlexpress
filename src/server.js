import express from "express"
import {ApolloServer} from "apollo-server-express"
import userSchema from "./schemas/userSchema.js"
import userResolver from "./resolvers/userResolver.js"
import userModel from "./db/userModel.js"

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs: userSchema,
    resolvers: userResolver,
    context: () => ({
      db: userModel,
    }),
  });

  // Attendez que le serveur Apollo démarre
  await server.start();

  // Appliquez le middleware à l'application Express
  server.applyMiddleware({ app });

  // Démarrez le serveur Express
  app.listen({ port: 4000 }, () =>
    console.log(`Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

// Démarrez le serveur
startServer();
