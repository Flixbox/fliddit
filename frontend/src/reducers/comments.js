export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SUCCESS':
            const comments = action.payload.data.comments
            if (!comments) return state
            return {
                ...comments,
            }
        default:
            return state
    }
}
