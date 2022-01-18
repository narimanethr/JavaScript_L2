import React from 'react';
import '../assets/style/task.css';

export default class TaskList extends React.Component {
    constructor(props) {
      super(props);
    }

    render(){
        
        return(   
        <div className="task">
            {this.props.description +" (" + this.props.duration+" mn) (priorité : "+ this.props.priority +") \n"}
        </div>
        );
    }

}