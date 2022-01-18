import React from 'react';
import '../assets/style/priorityLevel.css';

export default class PriorityLevel extends React.Component {
    constructor(props) {
      super(props);
     
      this.handleClick = this.handleClick.bind(this);
    }
  /** fonction qui permet d'implementer et de mettre à jour le niveau de priorité d'une tache  */
    handleClick() {
       this.props.taskScaleChanged(this.props.valeur);
    }
    

    render(){
        return( 
        <div className={this.props.etat}>
          <div className="level"  onClick = { this.handleClick }></div>
        </div> );
    }

}console