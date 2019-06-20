import { loadCategories } from '../actions/categories'
import { loadPosts } from '../actions/posts'
import { loadComments } from '../actions/comments'

export const loadInitialData = () => {
    return dispatch => {
        dispatch(loadCategories())
        dispatch(loadPosts())
        dispatch(loadComments())
    }
}
