import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";

import {Header} from './components'
import {Route} from "react-router-dom";
import Home from "./Pages/home";
import Cart from "./Pages/Cart";
import axios from "axios";

const App = () => {

    const [pizzas, setPizzas] = useState([])

    useEffect(() => {
        axios.get('http://localhost:3000/db.json')
            .then((res) => {setPizzas(res.data.pizzas);})
    }, [])

    return (
        <Container>
            <Header/>
            <Route exact path={"/"} render={() => (
                <Home items={pizzas}/>)}/>
            <Route exact path={"/cart"} component={Cart}/>
        </Container>
    );
}

export default App;
