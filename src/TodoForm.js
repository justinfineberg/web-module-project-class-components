import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state={
            input: ''
        }
    }
    onSubmit = (e) =>{
        console.log('t')
        e.preventDefault();
        this.props.addItem(this.state.input)
        this.setState({
      input:''
    })
    }

    onChange=(e)=>{
        console.log(e.target.value)
        this.setState({
            ...this.state,
            input: e.target.value
        })
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}> Add To Do Item: 
                <input onChange={this.onChange} value={this.state.input} name="add" type="text" placeholder="Add item" />
                <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default TodoForm;