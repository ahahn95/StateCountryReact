import React, { Component } from 'react';


class App extends Component {
    constructor() {
        super();
        this.state = {
            countryList: [],
            stateList: [],
        };

        this.componentWillMount = this.componentWillMount.bind(this);
        this.handleChange = this.handleChange.bind(this);
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

    handleChange(event) {
        fetch('https://xc-ajax-demo.herokuapp.com/api/states/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: `country=${event.target.value}`,
        }).then(response => response.json())
            .then((response) => {
                this.setState({
                    stateList: response,
                });
            });

        if (event.target.value === '') {
            this.setState({
                stateList: [],
            });
        }
    }

    render() {
        return (
            <div>
                <select id="Country" onChange={this.handleChange}>
                    <option value="" />
                    {this.state.countryList.map(country =>
                        <option value={country.code} key={country.code}>{country.name}</option>)}
                </select>

                <select id="State">
                    <option value="" />
                    {this.state.stateList.map(state =>
                        <option value={state.code} key={state.code}>{state.name}</option>)}
                </select>

            </div>
        );
    }
}

export default App;
