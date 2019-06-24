import { LOAD_COMMENT_SECTION } from '../actions/comments'

export default (state = {}, action) => {
    switch (action.type) {
        case `${LOAD_COMMENT_SECTION}_SUCCESS`:
            const comments = action.payload.data
            if (!comments) return {}
            return comments
        default:
            return state
    }
}
