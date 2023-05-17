import React from 'react';
import { useRef } from 'react';
import './Search.css'
const Search = (props) => {
    const inputRef=useRef('');
    

    const submitHandler=(event)=>{
 event.preventDefault();
 const addedTask=inputRef.current.value;

props.addItemHandler(addedTask);
 inputRef.current.value='';
    };
  return (
    <div className="input-container">
      <input type="text" className="input-field" placeholder='Add task here...' ref={inputRef} />
      <button className="button" onClick={submitHandler}>Submit</button>
    </div>
  );
};

export default Search;
