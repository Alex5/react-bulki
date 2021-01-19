import React from "react";
import {Route} from "react-router-dom";
import axios from "axios";
import {useDispatch} from "react-redux";
import {setPizzas} from "./redux/reducers/pizzas";

import {Header} from './components'
import {Home, Cart} from './Pages'
import {getPizzas} from "./api/Api";

const App = () => {

    const dispatch = useDispatch();

    React.useEffect(() => {
        axios
            .get('http://localhost:3000/db.json')
            .then(({data}) => {
                dispatch(setPizzas(data.pizzas))
            })
            .finally(() => {

            })
        getPizzas().then(({data}) => dispatch(setPizzas(data.pizzas)))
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
