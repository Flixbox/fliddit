export const LOAD_COMMENT_SECTION = 'LOAD_COMMENT_SECTION'

export function loadCommentSection({ postId }) {
    return {
        type: LOAD_COMMENT_SECTION,
        payload: {
            request: {
                url: `/posts/${postId}/comments`,
            },
        },
    }
}
