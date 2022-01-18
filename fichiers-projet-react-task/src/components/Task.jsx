import React from 'react';

import PriorityScale from './PriorityScale.jsx';
import '../assets/style/task.css';

import DoneButton from'./DoneButton.jsx';

export default class Task extends React.Component {
    constructor(props) {
      super(props);
      this.state={scale:this.props.priority}
     
    }
/** fonction qui permet de changer la priorité d'une tache */
    taskPriorityChanged(p){
      this.setState({scale:p});
    }
    
    render(){
      
        return(   
        <div className="task"> 
            <div className="info"> {this.props.description +"(" +this.props.duration+"mn) "} </div>
            {<PriorityScale taskPriorityChange={this.taskPriorityChanged.bind(this)} taskScale={this.state.scale} levels={[1,2,3,4,5,6]} />}
            ({this.state.scale})
            <DoneButton  tasksDone={this.props.tasksDone}  tasksDoneChanged={this.props.tasksDoneChanged}
             tasksTodo={this.props.tasksTodo} tasksTodoChanged={this.props.tasksTodoChanged} 
             id={this.props.id} description={this.props.description} duration={this.props.duration} priority={this.state.scale} />
        </div>

        );
    }

}