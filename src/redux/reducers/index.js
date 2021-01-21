import {combineReducers} from "redux";
import pizzas from "./pizzas";
import filters from "./filters";
import cart from "./cart";

let rootReducer = combineReducers({
    pizzasData: pizzas,
    filtersData: filters,
    cart
})

export default rootReducer