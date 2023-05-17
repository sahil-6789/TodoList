import "./App.css";
import Search from "./components/search";
import ListItem from "./components/ListItem";
import { useState } from "react";
function App() {
  const [items, setItems] = useState([]);

  const addItemHandler = (expense) => {
    const itemToAdd={
      data:expense,
      check:false,
    }
    setItems((prevExpenses) => {
      return [ ...prevExpenses,itemToAdd];
    });
  };
const changeHandler=(id)=>{
  const newArray = items.map((element,index) => {
    if (index === id) {
      return { ...element, check: !element.check}; // Modify the attribute for the target element
    }
    return element;
  });
  setItems(newArray);
};
  const deleteItem=(id)=>{
setItems((prevItems)=>{
  return prevItems.filter((arrElement,index)=>{
return index!==id;
  })
})
  };

  return (
    <div className="outer">
    <div className="container">
      <div className="content">
        <h1 className="element">Todo</h1>
        <div>
          {items.map((val, index) => {
            return <ListItem items={val.data} key={index} id={index} onSelect={deleteItem} check={val.check} onChange={changeHandler}/>;
          })}
        </div>
      </div>
    </div>
      <div className="fixed-bottom">
        {" "}
        <Search addItemHandler={addItemHandler} />
      </div>
       </div>
  );
}

export default App;
