import { LOAD_COMMENT_SECTION, VOTE_COMMENT } from '../actions/comments'

export default (state = [], action) => {
    switch (action.type) {
        case `${LOAD_COMMENT_SECTION}_SUCCESS`:
            const comments = action.payload.data
            if (!comments) return {}
            return comments
        case VOTE_COMMENT:
            if (!state) return null
            const { id, option } = action.payload.request.data
            return state.map(comment => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        voteScore:
                            option === 'upVote' ? comment.voteScore + 1 : comment.voteScore - 1,
                    }
                }
                return comment
            })
        default:
            return state
    }
}
