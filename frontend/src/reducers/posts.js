import { LOAD_POSTS } from '../actions/posts'

export default (state = {}, action) => {
    switch (action.type) {
        case `${LOAD_POSTS}_SUCCESS`:
            const posts = action.payload.data
            if (!posts) return state
            return {
                ...posts,
            }
        default:
            return state
    }
}
