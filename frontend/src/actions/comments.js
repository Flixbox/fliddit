export function loadCommentSection({ postId }) {
    return {
        type: 'LOAD',
        payload: {
            request: {
                url: `/posts/${postId}/comments`,
            },
        },
    }
}
