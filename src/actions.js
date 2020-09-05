import {
	CHANGE_SEARCH_FIELD,
	REQUEST_ROBOTS_PENDING,
	REQUEST_ROBOTS_SUCCESS,
	REQUEST_ROBOTS_FAIL
} from './constants.js';


export const setSearchField = (text) => ({
	//Action will take text and return the object below
	//Capitalize constants
	type: CHANGE_SEARCH_FIELD,
	payload: text
})

//Higher order function = Func that returns func
//Thunk has to use higher order function
export const requestRobots = () => (dispatch) => {
	dispatch({type: REQUEST_ROBOTS_PENDING});
	fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => dispatch({ type: REQUEST_ROBOTS_SUCCESS, payload: data}))
			.catch(error => dispatch({ type: REQUEST_ROBOTS_FAIL, payload: error}))
}