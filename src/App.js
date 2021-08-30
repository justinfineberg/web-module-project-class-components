import React from 'react';
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const taskList = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state= {
      tasks: taskList
    }
  }
 
  crossOff=(id)=>{
   this.setState({
     ...this.state.tasks,
     tasks: this.state.tasks.map(item=>{
       if(id===item.id){
         return {...item, 
          completed: !item.completed }
       } else{
         return item
       }
     })
   })
  }

  addItem = (name)=>{
    const newItem={
      task: name,
      id: Date.now(),
      completed: false
    }
    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newItem]
    })
  }

  clearCompleted=()=>{
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter(item=> item.completed === false)
    })
  }
  
  render() {
    return (
      
      <div>
        <h2>To DO List</h2>
        <TodoForm addItem={this.addItem} />
        
        <TodoList crossOff={this.crossOff} tasks={this.state.tasks} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    );
  }
}

export default App;
