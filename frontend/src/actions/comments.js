export function loadComments() {
    return {
        type: 'LOAD',
        payload: {
            request: {
                url: '/comments',
            },
        },
    }
}
