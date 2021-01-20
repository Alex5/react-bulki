import React from "react";
import {Route} from "react-router-dom";

import {Header} from './components'
import {Home, Cart} from './Pages'

const App = () => {
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
