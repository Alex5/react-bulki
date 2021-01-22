import {pizzaApi} from "../../api/Api";

const SET_PIZZAS = "SET-PIZZAS"
const SET_LOADED = "SET_LOADED"

let initialState = {
    items: [],
    isLoaded: false
}

const pizzas = (state = initialState, action) => {
    switch (action.type) {
        case SET_PIZZAS:
            return {
                ...state,
                items: action.payload,
                isLoaded: true
            }
        case SET_LOADED:
            return {
                ...state,
                isLoaded: action.payload
            }
        default:
            return state
    }
}

export const setPizzas = (items) => ({type: SET_PIZZAS, payload: items});
export const setLoaded = payload => ({type: SET_LOADED, payload})

export const fetchPizzas = (sortBy, category) => async (dispatch) => {
    dispatch(setLoaded(false))
    let response = await pizzaApi.getPizzas(category, sortBy)
    dispatch(setPizzas(response.data));
}



export default pizzas;