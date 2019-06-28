import { v4 as uuid } from 'uuid'

import { user } from '../helpers/config'

export const LOAD_COMMENT_SECTION = 'LOAD_COMMENT_SECTION'
export const VOTE_COMMENT = 'VOTE_COMMENT'
export const ADD_COMMENT = 'ADD_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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

export function addComment({ body, parentId }) {
    return {
        type: ADD_COMMENT,
        payload: {
            request: {
                method: 'POST',
                url: `/comments`,
                data: {
                    id: uuid(),
                    timestamp: new Date(),
                    body,
                    author: user,
                    parentId,
                },
            },
        },
    }
}

export function editComment({ id, body }) {
    return {
        type: EDIT_COMMENT,
        payload: {
            request: {
                method: 'PUT',
                url: `/comments/${id}`,
                data: {
                    id,
                    body,
                },
            },
        },
    }
}

export function deleteComment({ id }) {
    return {
        type: DELETE_COMMENT,
        payload: {
            request: {
                method: 'DELETE',
                url: `/comments/${id}`,
                data: {
                    id,
                },
            },
        },
    }
}
