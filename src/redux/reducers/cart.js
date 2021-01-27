const ADD_PIZZA_TO_CART = "ADD-PIZZA-TO-CART"

let initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0
}

const getTotalPrice = arr => arr.reduce((sum, obj) => obj.price + sum, 0)

const cart = (state = initialState, action) => {
    switch (action.type) {
        case ADD_PIZZA_TO_CART:
            const currentPizzaItems = !state.items[action.payload.id]
                ? [action.payload]
                : [...state.items[action.payload.id].items, action.payload]

            const newItems = {
                ...state.items,
                [action.payload.id]: {
                    items: currentPizzaItems,
                    totalPrice: getTotalPrice(currentPizzaItems),
                }
            }

            const items = Object.values(newItems).map(obj => obj.items)
            const allPizzas = [].concat.apply([], items);
            const totalPrice = getTotalPrice(allPizzas);

            return {
                ...state,
                items: newItems,
                totalCount: allPizzas.length,
                totalPrice
            }
        default:
            return state
    }
}

export const addPizzaToCart = (pizzaObj) => ({type: ADD_PIZZA_TO_CART, payload: pizzaObj});

export default cart;