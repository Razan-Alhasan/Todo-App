import React , {Component} from "react";
import './AddItems.css';
class AddItems extends Component{
    state ={
        name:'',
        age:''
    }
    handleChange = (e)=>{
        this.setState({
            [e.target.id] : e.target.value
    })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addItem(this.state)
        this.setState({
            name:'',
            age:''
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} className="form">
                    <input type="text" placeholder="Enter your name..." id="name" onChange={this.handleChange} value={this.state.name}/>
                    <input type="number" placeholder="Enter your age..." id="age" onChange={this.handleChange} value={this.state.age}/>
                    <input type="submit" value="Add Todo" className="btn" id="action"/>
                </form>
            </div>
        );
    }
}
export default AddItems;