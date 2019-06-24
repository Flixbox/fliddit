import { loadCategories } from '../actions/categories'
import { loadPosts } from '../actions/posts'

export const loadInitialData = () => {
    return dispatch => {
        dispatch(loadCategories())
        dispatch(loadPosts())
    }
}
