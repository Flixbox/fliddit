export function loadPosts() {
    return {
        type: 'LOAD',
        payload: {
            request: {
                url: '/posts',
            },
        },
    }
}
