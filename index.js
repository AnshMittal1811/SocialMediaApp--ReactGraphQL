const { ApolloServer, PubSub } = require('apollo-server');
// const { PubSub } = require('graphql-subscriptions');

// const gql = require('graphql-tag');
const mongoose  = require('mongoose');

const typeDefs = require('./graphql/typeDefs');
const { MONGODB } = require('./config.js');
const resolvers = require('./graphql/resolvers');

const pubsub = new PubSub();

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({ req, pubsub })
});

// Server.listen returns (port: port no)
// returns a promise; whats a promise?

// Apollo server runs on Express 
// Don't write any specific express routes
mongoose.connect(MONGODB, {useNewUrlParser: true})
    .then(() => {
        console.log("MongoDB connected");
        return server.listen({port: 5000});
}).then((response) => {
    console.log(`Server running at ${response.url}`);
});
