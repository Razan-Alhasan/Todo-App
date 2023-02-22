import './ListItems.css';
import React from 'react';
const ListItems = (props) => {
    const {items , deleteItems} = props;
    const length =items.length;
    const ListI = length ? (items.map( item => {
        return(
            <div key={item.id}>
                <span className='name'>{item.name}</span>
                <span className='age'>{item.age}</span>
                <span className='action' onClick={() => deleteItems(item.id)}> &times; </span>
            </div>
        )
    }) ) : <p> There is no item to show</p>
    return(
        <div className='todolist'>
            <div>
                <span className='name title'>Name</span>
                <span className='age title'>Age</span>
                <span className='action title'>Delete</span>
            </div>
            {ListI}
        </div>
    );
}
export default ListItems;