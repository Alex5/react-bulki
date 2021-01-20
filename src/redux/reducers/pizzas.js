import {pizzaApi} from "../../api/Api";

const SET_PIZZAS = "SET-PIZZAS"

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
        default:
            return state
    }
}

export const setPizzas = (items) => ({type: SET_PIZZAS, payload: items});

export const getPizzasThunk = () => async (dispatch) => {
    let response = await pizzaApi.getPizzas()
    dispatch(setPizzas(response.data));
}

export default pizzas;