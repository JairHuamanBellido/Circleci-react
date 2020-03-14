import React, { Fragment } from 'react';
import Name from "./Name";


class App extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Fragment>
                <Name name="hola"/>
            </Fragment>
        );
    }
}

export default App;
