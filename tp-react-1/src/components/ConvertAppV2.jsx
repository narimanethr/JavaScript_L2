import React from 'react';
import dataCurrencies from '../data/currencies.js'
import Currency from './currency.jsx';

import '../assets/style/app.css'


export default class ConvertAppV2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {euroValue : "1", currencies : []};
        this.updateCurrencies = this.updateCurrencies.bind(this);
    }

    componentDidMount() {
        this.setState({currencies : dataCurrencies});
    }
    updateCurrencies(event) {
        this.setState({euroValue : event.target.value});
    }

    render() {
        const currencies = this.state.currencies.map(
            currency => (<Currency key={currency.code} {...currency} euro={parseFloat(this.state.euroValue)} />)
        );

        return (
            <div className="app">
                <input type="text" value={this.state.euroValue} onChange={this.updateCurrencies} />€
                {currencies}
            </div>
        )
    }
}