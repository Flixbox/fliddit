import { getInitialData } from '../helpers/api'
import { receiveCategories } from '../actions/categories'

function handleInitialData() {
    return dispatch => {
        return getInitialData().then(({ categories, posts, comments }) => {
            dispatch(receiveCategories(categories))
        })
    }
}
