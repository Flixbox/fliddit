export function loadCategories() {
    return {
        type: 'LOAD',
        payload: {
            successSuffix: '_CATEGORIES_SUCCESS',
            request: {
                url: '/categories',
            },
        },
    }
}
