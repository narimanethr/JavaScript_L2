import React from 'react';
import Todo from './Todo.jsx';
import AddTask from './AddTask.jsx';
import Done from './Done.jsx';
import '../assets/style/taskApp.css';
import tasks from '../data/tasksData.js';


export default class TaskApp extends React.Component {
  constructor(props) {
    super(props);
    this.state={Todo:[],Done:[],priority:1}
  }
  componentDidMount(){
    this.setState({Todo:tasks.map(task=>({...task,priority:this.state.priority}))});
  }
  /** mettre à jour la liste des taches à accomplir */
  changeTodo(newTask){
    this.setState({Todo:newTask});
  }
  /** metttre à jour la liste des taches qui ont  déja été accomplies */
  changeDone(newDoneTask){
    this.setState({Done:newDoneTask});
  }

  render() {
    return (
      <div className="taskApp">
        <AddTask id={"T"+(this.state.Todo.length+1)} tasks={this.state.Todo} todoChanged={this.changeTodo.bind(this)} />
        <Todo tasks={this.state.Todo} todoChanged={this.changeTodo.bind(this)} done={this.state.Done}  doneChanged={this.changeDone.bind(this)}  />
        <Done done={this.state.Done}/>
      </div>
    );
  }
}
