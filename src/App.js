import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

class App extends React.Component {


    render() {
        return (
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                    </ul>

                    <hr />

                    {/*
                A <Switch> looks through all its children <Route>
                elements and renders the first one whose path
                matches the current URL. Use a <Switch> any time
                you have multiple routes, but you want only one
                of them to render at a time
              */}
                    <Switch>
                        <Route exact path="/">
                            <h1>Hola soy el home</h1>
                        </Route>
                        <Route path="/about">
                            <h2>Hola soy el about</h2>
                        </Route>
                        <Route path="/dashboard">
                            <h2>Hola soy el dashboard</h2>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
