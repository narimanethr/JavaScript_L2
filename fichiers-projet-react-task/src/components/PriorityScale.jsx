import '../assets/style/priorityScale.css';

import React from 'react';
import PriorityLevel from './PriorityLevel.jsx';

export default class PriorityScale extends React.Component {
  constructor(props) {
    super(props);
    this.state={taskScale:this.props.taskScale};
  
  }
  /** fonction qui permet de d'ordonner les taches par niveau de priorité de maniere décroissante */
  handletaskScale(s){
    this.setState({taskScale:s});
    this.props.taskPriorityChange(s);
  }
 
  render(){
    const pl=this.props.levels
                      .map(lev => {
                         if (lev <= this.state.taskScale){ 
                         return <PriorityLevel taskScale={this.state.taskScale} taskScaleChanged={this.handletaskScale.bind(this)} etat="on" valeur={lev} key={lev}/>
                      }
                      else{
                         return <PriorityLevel  taskScale={this.state.taskScale} taskScaleChanged={this.handletaskScale.bind(this)} etat="off" valeur={lev} key={lev}/>

                      }
                    }
                    );
    return(
      <div className="scale">
        {pl}
      </div>
      );
  }
}