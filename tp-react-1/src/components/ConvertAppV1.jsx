import React from 'react';
import dataCurrencies from '../data/currencies.js'
import Currency from './currency.jsx';

import '../assets/style/app.css'

export default class ConvertAppV1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {euroValue : "1", currencies : []};
  }

  render() {
    const currencies = this.state.currencies.map(
        currency => (<Currency key={currency.code} {...currency} euro={parseFloat(this.state.euroValue)} />)
    );

    return (
        <div className="app">
            <input type="text" ref="euro" defaultValue={this.state.euroValue} />€
            <button onClick={this.updateCurrencies}>OK</button>
            {currencies}
        </div>
    )
}
}
