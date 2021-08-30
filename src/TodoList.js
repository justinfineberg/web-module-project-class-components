import React, { Component } from 'react';
import Todo from './Todo'

class TodoList extends Component {
    render() {
        return (
            <div>
                <ul>
                {this.props.tasks.map(item=>{
                    return (
                        <Todo crossOff={this.props.crossOff} task={item} />
                    )
                })}
                </ul>
            </div>
        );
    }
}

export default TodoList;