import {
	GET_CATEGORY_FILMS, GET_POSTER_MOVIE
} from './actionTypes'

import films from '../../data/films'

export function getFilms() {
	return {
		type: GET_CATEGORY_FILMS,
		payload: films
	}
}

export function getPosterMovie() {
	const sortedPosterMovie = 1 + Math.floor((10 - 1) * Math.random());
	const film = films[sortedPosterMovie]
	return {
		type: GET_POSTER_MOVIE,
		payload: film
	}
}