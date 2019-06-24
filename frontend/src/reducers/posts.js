import { LOAD_POSTS, VOTE_POST } from '../actions/posts'

export default (state = [], action) => {
    switch (action.type) {
        case `${LOAD_POSTS}_SUCCESS`:
            const posts = action.payload.data
            if (!posts) return state
            return posts
        case VOTE_POST:
            if (!state) return null
            const { id, option } = action.payload.request.data
            return state.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        voteScore: option === 'upVote' ? post.voteScore + 1 : post.voteScore - 1,
                    }
                }
                return post
            })
        default:
            return state
    }
}
