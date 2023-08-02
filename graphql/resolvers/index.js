const postsResolvers = require('./posts');
const usersResolvers = require('./users');
const commentsResolvers = require('./comments');

//  For each query or mutation, each has its own resolvers
// Group all the queries inside the query obj and all
// mutations inside the mutations obj

// Right now don't have any mutations
module.exports = {
    Query: {
        ...postsResolvers.Query
    },
    Mutation: {
        ...usersResolvers.Mutation,
        ...postsResolvers.Mutation,
        ...commentsResolvers.Mutation
    }, 
    Subscription: {
        ...postsResolvers.Subscription
    }
};