import React from 'react';

import '../assets/style/murImages.css';


/*
 define root component
*/
export default class ImageWall extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const imgs =this.props.images.filter(im =>im.texte.toLowerCase().includes(this.props.filterText.toLowerCase())).map(im =><img 
                                                src={im.image} 
                                                alt={im.texte} 
                                                title={im.texte} 
                                                key={im.image}
                                                onMouseOver = { () => this.props.imageChanged(im.image, im.texte) }
                                              />);
    return (
     
      <div id="mur"> mur d'images

      <div >{imgs}</div>

      </div>
    );
  }
}
