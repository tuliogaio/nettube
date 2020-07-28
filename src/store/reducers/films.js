import {
	GET_CATEGORY_FILMS, GET_POSTER_MOVIE
} from '../actions/actionTypes'

const initialState = { films: [], posterMovie: {} }

export default function (state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORY_FILMS:
			return {
				...state,
				films: action.payload
			}
		case GET_POSTER_MOVIE:
			return {
				...state,
				posterMovie: action.payload
			}
		default:
			return state
	}
}