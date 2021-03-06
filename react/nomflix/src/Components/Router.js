import React from "react";
import { HashRouter as Router, Route ,Redirect,
Switch} from "react-router-dom";
import Home from "Routes/Home";
import Header from "Components/Header";
import Search from "Routes/Search";
import Detail from "Routes/Detail";
import TV from "Routes/TV";

export default () =>(
    <Router> 
    <>
    <Header />
    <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/tv" component={TV} />
        <Route path= "/movie/:id" component={Detail}/>
        <Route path= "/show/:id" component={Detail}/>
        <Redirect from="*" to="/" />
        </Switch>
        </>
    </Router>
);