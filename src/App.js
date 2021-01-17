import React, {useEffect, useState} from "react";
import Container from "@material-ui/core/Container";

import {Header} from './components'
import {Route} from "react-router-dom";
import Home from "./Pages/home";
import Cart from "./Pages/Cart";
import axios from "axios";


const App = () => {

    const [pizzas, setPizzas] = useState([])
    const [isLoading, setIsLoading] = useState(null)

    useEffect(() => {
        setIsLoading(true)
        axios.get('http://localhost:3000/db.json')
            .then((res) => {
                setPizzas(res.data.pizzas)

                if (!res) {
                    axios.get('https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/1').then((res) => res.data.pizzas)
                }
            })
            .finally(() => {
                setIsLoading(false)
            })
        axios.get('https://api.jsonbin.io/b/600464f9e31fbc3bdef4d235/1').then((res) => res.data.pizzas)
    }, [])

    return (
        <Container>
            <Header/>
            <Route exact path={"/"} render={() => (
                <Home isLoading={isLoading} items={pizzas}/>)}/>
            <Route exact path={"/cart"} component={Cart}/>
        </Container>
    );
}

export default App;
