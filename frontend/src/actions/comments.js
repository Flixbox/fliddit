export const LOAD_COMMENT_SECTION = 'LOAD_COMMENT_SECTION'
export const VOTE_COMMENT = 'VOTE_COMMENT'

export function loadCommentSection({ postId }) {
    return {
        type: LOAD_COMMENT_SECTION,
        postId,
        payload: {
            request: {
                url: `/posts/${postId}/comments`,
            },
        },
    }
}

export function vote({ id, option }) {
    return {
        type: VOTE_COMMENT,
        payload: {
            request: {
                method: 'POST',
                url: `/comments/${id}`,
                data: {
                    id,
                    option,
                },
            },
        },
    }
}
