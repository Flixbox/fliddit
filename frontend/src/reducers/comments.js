import {
    LOAD_COMMENT_SECTION,
    VOTE_COMMENT,
    ADD_COMMENT,
    EDIT_COMMENT,
    DELETE_COMMENT,
} from '../actions/comments'

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
        case ADD_COMMENT: {
            const commentData = action.payload.request.data
            return [...state, { ...commentData, voteScore: 1 }]
        }
        case EDIT_COMMENT: {
            if (!state) return null
            const { id, body } = action.payload.request.data
            return state.map(comment => {
                if (comment.id === id) {
                    return {
                        ...comment,
                        body,
                    }
                }
                return comment
            })
        }
        case DELETE_COMMENT: {
            if (!state) return null
            const { id } = action.payload.request.data
            const result = [...state]
            state.map((comment, index) => comment.id === id && result.splice(index, 1))
            return result
        }
        default:
            return state
    }
}
