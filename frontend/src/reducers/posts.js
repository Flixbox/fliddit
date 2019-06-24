import { LOAD_POSTS, VOTE_POST, EDIT_POST, DELETE_POST } from '../actions/posts'

export default (state = [], action) => {
    switch (action.type) {
        case `${LOAD_POSTS}_SUCCESS`:
            const posts = action.payload.data
            if (!posts) return state
            return posts
        case VOTE_POST: {
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
        }
        case EDIT_POST: {
            if (!state) return null
            const { id, title, body } = action.payload.request.data
            return state.map(post => {
                if (post.id === id) {
                    return {
                        ...post,
                        title,
                        body,
                    }
                }
                return post
            })
        }
        case DELETE_POST:
            if (!state) return null
            const { id } = action.payload.request.data
            return state.map(post => {
                if (post.id === id) {
                    return {}
                }
                return post
            })
        default:
            return state
    }
}
