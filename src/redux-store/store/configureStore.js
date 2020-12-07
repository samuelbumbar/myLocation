import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import categoriesReducer from '../reducers/categories'
import locationsReducer from '../reducers/locations'
import filtersReducer from '../reducers/filters'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const configureStore = () => (
    createStore(
        combineReducers({
            categories: categoriesReducer,
            locations: locationsReducer,
            filters: filtersReducer
        }),
        composeEnhancers(applyMiddleware(thunk))
    )
)

export default configureStore