import React from 'react';
import './ListItem.css'
import Button from './Button';
import CheckField from './CheckField';
const ListItem = (props) => {

  return (
    <div className="todo-item">
      <CheckField  checked={props.check} onChange={()=>{props.onChange(props.id)}} id={props.id}/>
   
  
    <p className='text'>{props.items}</p>

    <Button className='button1' onClick={()=>{
        props.onSelect(props.id);
    }}>X</Button>

  </div>
  );
};

export default ListItem;
