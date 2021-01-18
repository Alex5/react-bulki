import {combineReducers} from "redux";
import pizzas from "./pizzas";
import filters from "./filters";

let rootReducer = combineReducers({
    pizzasData: pizzas,
    filtersData: filters
})

export default rootReducer