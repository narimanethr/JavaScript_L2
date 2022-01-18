import React from 'react';

import '../assets/style/murImages.css';

import dataImages from '../data/dataImages.js';

/*
 define root component
*/
export default class ImageDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state={filterValue:''};
  }
  filterValueChanged(event){
    this.setState({filterValue:event.target.value});
    this.props.filterChanged(event.target.value);
    
  }

  render() {

  
    return (
   
      <div id="details"> details
        <input
      id="filtre" type="text" placeholder="filtre image..."
      value= {this.state.filterValue}
      onChange = {this.filterValueChanged.bind(this) }
   />
      <img src={this.props.image} alt={this.props.texte} title={this.props.texte}/>
      <div className="legende"> {this.props.texte} </div>
    
      </div>
    );
  }
}
