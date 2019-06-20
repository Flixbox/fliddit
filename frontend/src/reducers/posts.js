export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SUCCESS':
            if (!action.payload.config.url.includes('posts')) return {}
            const posts = action.payload.data
            if (!posts) return state
            return {
                ...posts,
            }
        default:
            return state
    }
}
