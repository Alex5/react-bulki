import React from "react";
import {Route} from "react-router-dom";
import {useDispatch} from "react-redux";
import {getPizzasThunk, setPizzas} from "./redux/reducers/pizzas";

import {Header} from './components'
import {Home, Cart} from './Pages'
// import {pizzaApi, getPizzasServer} from "./api/Api";

const App = () => {
    const dispatch = useDispatch();
    React.useEffect(() => {
        dispatch(getPizzasThunk())
        // getPizzasServer().then(({data}) => dispatch(setPizzas(data)))
    }, [dispatch])

    return (
        <div className="container">
            <Header/>
            <Route exact path={"/"} component={Home}/>
            <Route exact path={"/cart"} component={Cart}/>
        </div>
    );
}

// const mapStateToProps = (state) => ({
//     items: state.pizzasData.items,
//     isLoading: state.pizzasData.isLoaded
// })

export default App;
