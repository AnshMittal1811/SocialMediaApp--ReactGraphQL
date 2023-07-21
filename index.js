const { ApolloServer } = require('apollo-server')
const gql = require('graphql-tag');
const mongoose  = require('mongoose');

const { MONGODB } = require('/config.js')


const Post = require('./models/Post.js');

// Tag Template strings
const typeDefs = gql`
    type Query{
        getPosts:
    }
`

//  For each query or mutation, each has its own resolvers
// Group all the queries inside the query obj and all
// mutations inside the mutations obj
const resolvers = {
    Query: {
        sayHi: () => 'Hello world!'
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
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
