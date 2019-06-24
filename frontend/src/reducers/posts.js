import { LOAD_POSTS, VOTE_POST } from '../actions/posts'

export default (state = [], action) => {
    switch (action.type) {
        case `${LOAD_POSTS}_SUCCESS`:
            const posts = action.payload.data
            if (!posts) return state
            return posts
        case VOTE_POST:
            console.log(action)
            return state
        default:
            return state
    }
}
