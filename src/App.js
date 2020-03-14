import React, { Fragment } from 'react';

class Name extends React.Component {

    render() {
        
        if (!this.props.mostrar) {
            return null;
        }
        else {
            return (
                <h1>Hola {this.props.name}</h1>
            )
        }
    }
}


class App extends React.Component {

    constructor(props) {
        super(props)
        this.handleChange = this.handleChange.bind(this);
    }
    state = {
        text:''    
    }

    maps = [1,2,3,4,5,6];
    componentDidMount() {
        console.log("2");
    }

    componentWillMount() {
        console.log("1");
    }
    handleChange= (e)=>{
        this.setState({text:e.target.value})
    }
    render() {
        return (
            <Fragment>
             <input
                type="text"
                value={this.state.text}
                onChange={ this.handleChange}
                />
            </Fragment>
        );
    }
}

export default App;
