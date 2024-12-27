import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";

const AllRoutes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
        </Switch>
    )
}

export default AllRoutes;