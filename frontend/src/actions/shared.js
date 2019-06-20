import { loadCategories } from '../actions/categories'

export const loadInitialData = () => {
    return dispatch => {
        dispatch(loadCategories())
    }
}
