import React, { Component } from 'react';
import DropDownList from './DropDownList';

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
        fetch('http://localhost:8002/countries', {
            header: {
                'Access-Control-Allow-Origin': '*',
                mode: 'no-cors',
            },
        }).then(response => response.json())
            .then((response) => {
                this.setState({
                    countryList: response,
                });
            });
    }

    handleChange(event) {
        if (event.target.value === '') {
            this.setState({
                stateList: [],
            });
        } else {
            fetch('http://localhost:8002/states', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `country=${event.target.value}`,
            }).then(response => response.json())
                .then((response) => {
                    response.sort((a, b) => {
                        if (a.name === b.name) { return 0; } else if (a.name > b.name) { return 1; } return -1;
                    });
                    this.setState({
                        stateList: response,
                    });
                });
            this.state.stateList.sort();
        }
    }

    render() {
        return (
            <div>
                <DropDownList input={this.state.countryList} handleChange={this.handleChange} />
                <DropDownList input={this.state.stateList} handleChange={null} />
            </div>
        );
    }
}

export default App;
