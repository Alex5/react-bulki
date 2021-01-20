import {pizzaApi, sortApi} from "../../api/Api";
import {setPizzas} from "./pizzas";

const SET_SORT_BY = "SET-SORT-BY"
const SET_CATEGORY = "SET-CATEGORY"

let initialState = {
    categories: "популярности",
    sortBy: "popular"
}

const filters = (state = initialState, action) => {
    switch (action.type) {
        case SET_SORT_BY:
            return {
                ...state,
                sortBy: action.payload
            }
        case SET_CATEGORY:
            return {
                ...state,
                sortBy: action.payload
            }
        default:
            return state
    }
}

export const setSortBy = (name) => ({type: SET_SORT_BY, payload: name});
export const setCategories = (index) => ({type: SET_CATEGORY, payload: index});

export const setSortThunk = (index) => async (dispatch) => {
    let response = await sortApi.sortByCategory(index)
    dispatch(setCategories(response.data));
}

export default filters;