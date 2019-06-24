export const LOAD_POSTS = 'LOAD_POSTS'
export const UPVOTE = 'UPVOTE'
export const DOWNVOTE = 'DOWNVOTE'

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

export function upvote({ id }) {
    return {
        type: UPVOTE,
        payload: {
            request: {
                method: 'POST',
                url: `/posts/${id}`,
                data: {
                    option: 'upVote',
                },
            },
        },
    }
}

export function downvote({ id }) {
    return {
        type: DOWNVOTE,
        payload: {
            request: {
                method: 'POST',
                url: `/posts/${id}?vote=downVote`,
                data: {
                    option: 'downVote',
                },
            },
        },
    }
}
