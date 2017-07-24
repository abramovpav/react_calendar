import React, {Component} from "react";
import Home from "./Home/Home";
import Calendar from "./calendar/Calendar";
import Header from "./Header/Header";
import {Route, Redirect, Switch} from 'react-router';
import NotFound from "./NotFound";

class MainContainer extends Component {

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/calendar" component={Calendar}/>
                    <Route exact path="/404" component={NotFound}/>
                    <Redirect to="/404" />
                </Switch>
            </div>
        );
    }
}

export default MainContainer;
