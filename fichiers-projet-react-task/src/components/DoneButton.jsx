import React from 'react';
import '../assets/style/doneButton.css';


export default class DoneButton extends React.Component {
  constructor(props) {
    super(props);
    this.state={doneTasks:this.props.tasksDone}
  }
/** fonction permettant de mettre fin à une tache par le biais du boutton DoneButton */
  handleClick(){
    const tasksFinished= this.props.tasksDone.slice();
    tasksFinished.push({id:this.props.id ,description:this.props.description, duration:this.props.duration, priority:this.props.priority });
    this.setState({doneTasks:tasksFinished});
    this.props.tasksDoneChanged(tasksFinished);
     this.tasksTodo=this.props.tasksTodo.filter(task=>this.props.id != task.id) ;
     this.props.tasksTodoChanged(this.tasksTodo);
  
  }

  render(){
    console.log(this.props.tasksDone);
    return(
      <div className="doneButton" onClick={this.handleClick.bind(this)}>✓</div>
    );
  }

}