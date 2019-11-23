import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

import Home from "./components/Home";
import Header from "./components/Header/Header";
import Resources from "./components/Resources";
import Events from "./components/Events";
import Organization from "./components/Organization";
import NotFound from "./components/NotFound";

import "./css/socicon.css";
import "./css/iconsmind.css";
import "./css/interface-icons.css";
import "./css/lightbox.min.css";
import "./css/theme.css";
import "./css/custom.css";



export default function App() {
    return (
        <div className="App">
            <Router>
                <Header link={Link} />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/resources" component={Resources} />
                    <Route path="/events" exact component={Events} />
                    <Route path="/organization" exact component={Organization} />
                    <Route path="/slack" render={() => {
                        window.location.href = "https://join.slack.com/t/jdsb/shared_invite/enQtNzA0NTY3OTE2ODg3LTE5ZTE5ODI5YmE5YTUzN2UyOWUxZmM1ZDZlNDliZTgxYTg0ODRlMmM3OThkY2JlZDRlNjIzYmJiMjNjNDBjOWQ"; 
                        return null;
                    }}/>
                    <Route component={NotFound} />
                </Switch>
            </Router>
        </div>
    );
}


