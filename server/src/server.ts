import express from 'express';
import path from 'path';
import dotenv from 'dotenv';

// 👇👇👇 ADD THIS for ES module __dirname workaround 👇👇👇
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// 👆👆👆 END workaround 👆👆👆

// Import the ApolloServer class
import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
// Import the two parts of a GraphQL schema
import { typeDefs, resolvers } from './schemas/index.js';
import db from './config/connection.js';
import { authenticateToken } from './services/auth.js';

dotenv.config(); // Load environment variables

const PORT = process.env.PORT || 3001;
const app = express();

// Initialize Apollo Server with schema and resolvers
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Start Apollo + Express server together
const startApolloServer = async () => {
  await server.start();

  // Middleware for parsing POST data
  app.use(express.urlencoded({ extended: false }));
  app.use(express.json());

  // Apply Apollo GraphQL middleware with auth context
  app.use('/graphql', expressMiddleware(server, {
    context: authenticateToken as any,
  }));

  // Serve React\frontend build in production mode
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/dist')));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(__dirname, '../client/dist/index.html'));
    });
  }

  // Wait for MongoDB and Start listening
  db.once('open', () => {
    console.log('🟢 MongoDB connected!');
    app.listen(PORT, () => {
      console.log(`🚀 API server running on port ${PORT}`);
      console.log(`📡 Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  });

  db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
  });
};

startApolloServer();

// ==============================================================================
// This is for Restful API Application with Express server
// import express from 'express';
// import path from 'node:path';
// import db from './config/connection.js';
// import routes from './routes/index.js';

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // if we're in production, serve client/build as static assets
// if (process.env.NODE_ENV === 'production') {
//   app.use(express.static(path.join(__dirname, '../client/build')));
// }

// app.use(routes);

// db.once('open', () => {
//   app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
// });
