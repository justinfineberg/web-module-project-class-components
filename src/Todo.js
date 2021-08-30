import React, { Component } from 'react';

class Todo extends Component {
    constructor(){
        super();
    }

    onClick=()=>{
        this.props.crossOff(this.props.task.id)
        console.log(this.props.task.completed)
    }
    render() {
        return (
            <li style={this.props.task.completed ? {textDecoration: "line-through", cursor: "pointer"} : {textDecoration: "none",  cursor: "pointer"}} onClick={this.onClick}>
                {this.props.task.task}    
            </li>
        );
    }
}

export default Todo;