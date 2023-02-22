import React , { Component } from 'react';
import './App.css';
import ListItems from './Components/ListItems/ListItems';
import AddItems from './Components/AddItems/AddItems';
class App extends Component {
  state={
    items : [
      {id:1,name:"Razan",age:22},
      {id:2,name:"Aya",age:29},
      {id:3,name:"Ahmad",age:30}
    ]
  }
  deleteItems= (id) => {
      let items = this.state.items.filter(item => {
        return item.id !== id
      }) 
      this.setState({items});
  }
  addItem =(item)=>{
    item.id=Math.random();
    let items=this.state.items;
    items.push(item);
    this.setState({items});
  }
  render(){
    return (
      <div className="App container">
        <h1> To Do App</h1>
        <ListItems items={this.state.items} deleteItems={this.deleteItems}/>
        <AddItems addItem={this.addItem}/>
      </div>
    )
  }
}
export default App;
