import {
	GET_CATEGORIES
} from './actionTypes'

import categories from '../../data/categories'

export function getCategories() {
	return {
		type: GET_CATEGORIES,
		payload: categories
	}
}