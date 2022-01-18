import React from 'react';
import '../assets/style/addTask.css';

export default class AddTask extends React.Component {
    constructor(props) {
      super(props);
      this.state={desription:"", duration:10 , priority:1,tasks:this.props.tasks };
    }

    /** fonction qui permet de recuperer la valeur de la description saisie */
    DescriptionChanged(event){
        this.setState({description:event.target.value});
    }

    
     /** fonction qui permet de recuperer la valeur de la  durée choisie */
    DurationChanged(event){
        this.setState({duration:parseInt(event.target.value)});
    }
    /** fonction permettant d'ajouter une tache */
    handleSubmit(){
        const tasks= this.props.tasks.slice();
        tasks.push({id:this.props.id,description:this.state.description,
            duration:this.state.duration,priority:this.state.priority});
        this.setState({tasks:tasks});
        this.props.todoChanged(tasks);
    }
/** permet d'afficher une tache avec sa descritption ainsi que sa duartion */
    render(){
        return(
        <div className="addTask">
            <input type="text" placeholder="decription"   value={this.state.description}  onChange={this.DescriptionChanged.bind(this)}/>
            <input type="number" min="0" value={this.state.duration} onChange={this.DurationChanged.bind(this)} />mn
            <button type="submit" onClick={this.handleSubmit.bind(this)}>add</button>
        </div>
    );
}

}
