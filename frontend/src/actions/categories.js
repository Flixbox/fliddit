export function loadCategories() {
    return {
        type: 'LOAD',
        payload: {
            request: {
                url: '/categories',
            },
        },
    }
}
