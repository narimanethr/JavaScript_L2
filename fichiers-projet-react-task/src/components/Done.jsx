import React from 'react';

import TaskList from'./TaskList.jsx';

export default class Done extends React.Component {
  constructor(props) {
    super(props);
this.state={affiche:false};
this.changeRender=this.changeRender.bind(this);
  }

/** fonction qui permet de gerer l'affichage des taches accomplies par la biais d'un boutton */
  changeRender(){ 
   
   if(this.state.affiche==false){
     this.setState({affiche:true});
   }
   else{
    this.setState({affiche:false});
   }
  }
  render(){
    
    return (
      <div className="tasklist">
        <h3>Tâches terminées <button onClick={this.changeRender} >+({this.props.done.length})</button> </h3>
        
        {this.state.affiche? this.props.done.map(task=><TaskList {...task} key={task.id}/>):null}
        </div>
    );
  }
}
