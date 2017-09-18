import React, { Component } from 'react';
// import { render } from 'react-dom';

class App extends Component {
    constructor() {
        super();
        this.state = {
            name: 'React',
            countryList: [],
            countryMap: [],
        };

        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch('https://xc-ajax-demo.herokuapp.com/api/countries/')
            .then(response => response.json())
            .then((response) => {
                this.setState({
                    countryList: response,
                });
            });
    }
    render() {
        return (
            <div>
                <h1 id="data">
                    Hi
                </h1>

                <select id="Country" />
                <select id="State">
                    <option>{}</option>
                </select>
            </div>
        );
    }
}

export default App;
