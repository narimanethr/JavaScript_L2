import React from 'react';
import ImageWall from './ImageWall.jsx'
import ImageDetails from './ImageDetails.jsx'
import '../assets/style/murImages.css';

import dataImages from '../data/dataImages.js';

/*
 define root component
*/
export default class ImageApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={image:"../images/image5.jpg", texte:"la plus belle",filterText:""};
    
  }
 imageChanged(newImage,newTexte){
   this.setState({image:newImage, texte:newTexte});
 }
 filterChanged(newFilterText){
   this.setState({filterText:newFilterText});
 }
  render() {
    
    return (
      <div>
        <ImageWall images={dataImages} imageChanged={this.imageChanged.bind(this)} filterText={this.state.filterText}/>
        <ImageDetails image={this.state.image}texte={this.state.texte}
        filterChanged={this.filterChanged.bind(this)}/>
       

      </div>
      
      
    );
  }
}
