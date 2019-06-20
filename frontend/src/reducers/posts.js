export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SUCCESS':
            const posts = action.payload.data
            if (!posts) return state
            return {
                ...posts,
            }
        default:
            return state
    }
}
