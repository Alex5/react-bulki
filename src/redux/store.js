import {applyMiddleware, compose, createStore} from 'redux'
import rootReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(rootReducer, composeEnhancers(
        applyMiddleware()
    ));

export default store;