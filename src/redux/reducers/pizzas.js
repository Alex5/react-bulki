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

export default pizzas;