const ADD_PIZZA_TO_CART = "ADD-PIZZA-TO-CART"

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            const newItems = {
                ...state.items,
                [action.payload.id]: !state.items[action.payload.id]
                    ? [action.payload]
                    : [...state.items[action.payload.id], action.payload]
            }
            return {
                ...state,
                items: newItems,
                totalCount: Object.keys(newItems).length
            }
        default:
            return state
    }
}

export const addPizzaToCart = (pizzaObj) => ({type: ADD_PIZZA_TO_CART, payload: pizzaObj});

export default cart;