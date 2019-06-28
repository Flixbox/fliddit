import { v4 as uuid } from 'uuid'

import { user } from '../helpers/config'

export const LOAD_POSTS = 'LOAD_POSTS'
export const VOTE_POST = 'VOTE_POST'
export const ADD_POST = 'ADD_POST'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'

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

export function addPost({ title, body, category }) {
    return {
        type: ADD_POST,
        payload: {
            request: {
                method: 'POST',
                url: `/posts`,
                data: {
                    id: uuid(),
                    timestamp: new Date(),
                    title,
                    body,
                    author: user,
                    category,
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
                    id,
                    title,
                    body,
                },
            },
        },
    }
}

export function deletePost({ id }) {
    return {
        type: DELETE_POST,
        payload: {
            request: {
                method: 'DELETE',
                url: `/posts/${id}`,
                data: {
                    id,
                },
            },
        },
    }
}
