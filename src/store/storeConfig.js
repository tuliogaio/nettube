import { createStore, combineReducers } from 'redux'

import categoriesReducers from './reducers/categories'
import filmsReducers from './reducers/films'

const reducers = combineReducers({
    categories: categoriesReducers,
    films: filmsReducers,
})

function storeConfig() {
    return createStore(reducers)
}

export default storeConfig