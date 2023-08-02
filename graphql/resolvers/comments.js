const {  AuthenticationError, UserInputError } = require('apollo-server');

const checkAuth = require('../../utils/check-auth');
const Post = require('../../models/Post');

module.exports = {
    Mutation: {
        createComment: async (_, {postId, body}, context) => {
            const { username } = checkAuth(context);
            if(body.trim()===''){
                throw new UserInputError('Empty Comment', {
                    errors: {
                        body: 'Comments body must not be empty'
                    }
                })
            }

            const post = await Post.findById(postId);
            
            if (post){
                post.comments.unshift({
                    body,
                    username,
                    createdAt: new Date().toISOString()
                })
                await post.save();
                return post;
            } else throw new UserInputError('Post not found');
        }, async deleteComment(_, {postId, commentId}, context) {
            const {username} = checkAuth(context);

            const post = await Post.findById(postId);

            if(post){
                const commentIdx = post.comments.findIndex(c => c.id === commentId);

                if(post.comments[commentIdx].username === username){
                    post.comments.splice(commentIdx, 1);
                    await post.save();
                    return post;
                } else {
                    throw new AuthenticationError('Action not allowed')
                }
            } else {
                throw new UserInputError("Post not found");
            }
        }
    }
}