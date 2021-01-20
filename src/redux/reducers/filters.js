import {pizzaApi, sortApi} from "../../api/Api";
import {setPizzas} from "./pizzas";

const SET_SORT_BY = "SET-SORT-BY"
const SET_CATEGORY = "SET-CATEGORY"

let initialState = {
    category: null,
    sortBy: {
        type: 'popular',
        order: 'desc',
    },
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
                category: action.payload
            }
        default:
            return state
    }
}

export const setSortBy = ({type, order}) => ({type: SET_SORT_BY, payload: {type, order}});
export const setCategory = (index) => ({type: SET_CATEGORY, payload: index});

export default filters;