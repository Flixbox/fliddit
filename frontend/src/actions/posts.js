export const LOAD_POSTS = 'LOAD_POSTS'
export const VOTE_POST = 'VOTE_POST'
export const EDIT_POST = 'EDIT_POST'

export function loadPosts() {
    return {
        type: LOAD_POSTS,
        payload: {
            request: {
                url: '/posts',
            },
        },
    }
}

export function vote({ id, option }) {
    return {
        type: VOTE_POST,
        payload: {
            request: {
                method: 'POST',
                url: `/posts/${id}`,
                data: {
                    id,
                    option,
                },
            },
        },
    }
}

export function editPost({ id, title, body }) {
    return {
        type: EDIT_POST,
        payload: {
            request: {
                method: 'PUT',
                url: `/posts/${id}`,
                data: {
                    title,
                    body,
                },
            },
        },
    }
}
