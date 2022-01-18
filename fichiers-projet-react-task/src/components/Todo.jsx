
import React from 'react';
import Task from './Task.jsx';
import '../assets/style/taskList.css';
/** fonction qui compare les deux proprités de deux taches distinctes */
const taskCompare=(t1,t2)=>{
  if(t1.props.priority<t2.props.priority){
    return 1;
  }
  else if(t1.props.priority>t2.props.priority){
    return -1;
  }
  return 0;
}
export default class Todo extends React.Component {
    constructor(props) {
      super(props);
      this.filterChanged=this.filterChanged.bind(this);
      this.state={filter:""}
    }
  
    filterChanged(event){
      this.setState({filter:event.target.value})
    }
    render(){
      let tasks=this.props.tasks
                        .filter(task=>task.description.toLowerCase().includes( this.state.filter.toLowerCase()))
                        .map(task=>(<Task key={task.id} {...task}  tasksTodo={this.props.tasks}
                           tasksTodoChanged={this.props.todoChanged} tasksDone={this.props.done}
                            tasksDoneChanged={this.props.doneChanged} taskPriorityChange/>)) ;
    
      
      tasks=tasks.sort(taskCompare);
    
      return(
      <div className= 'taskList'>  
        <h3>Tâches en cours</h3>
        <input id="filtre" type="text" 
              placeholder="filtre..." 
              value={this.state.filter} 
              onChange = {this.filterChanged} />
        <p>Il y a {this.props.tasks.length} tâches en cours. Pour une durée de {this.props.tasks.reduce ( (acc, t) => acc+t.duration, 0)} mn. </p>
        {tasks}
      </div>);
    }

}
