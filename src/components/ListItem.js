import React from 'react';
import './ListItem.css'

const ListItem = (props) => {

  return (
    <div className="todo-item">
    <input type="checkbox"   checked={props.check} onChange={()=>{props.onChange(props.id)}} />
  
    <p className='text'>{props.items}</p>

    <button className='button1' onClick={()=>{
        props.onSelect(props.id);
    }}>X</button>

  </div>
  );
};

export default ListItem;
