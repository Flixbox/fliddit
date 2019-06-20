export default (state = {}, action) => {
    switch (action.type) {
        case 'LOAD_SUCCESS':
            const categories = action.payload.data.categories
            if (!categories) return state
            return {
                ...categories,
            }
        default:
            return state
    }
}
