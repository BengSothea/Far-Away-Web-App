import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';

const Form = (props) => {

    const [item,setItem] = useState(
        { name:"",itemCount:"1",packed:false},
      );

    function onChangeHandle(event){
        const {name,value} = event.target;
        
        setItem((prevItem)=>{
          if(name=="item"){
            return {
                name: value,
                itemCount: prevItem.itemCount,
                packed: prevItem.packed
            }
          } else if(name=="itemCount"){
            return {
                name: prevItem.name,
                itemCount: value,
                packed: prevItem.packed
            }
          }
        })
     }

    function submitItem(event){
        event.preventDefault();
        props.addItem(item); // trigger addItem from props by Add button
        setItem({name:"",itemCount:"1",packed:false});
    }


    
  return (
    <div className='add-form'>
      <h3>What do you need for your 😍 trip?</h3>
      <form onSubmit={submitItem}>
        <select onChange={onChangeHandle}  name='itemCount'  value={item.itemCount}  required>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        <input onChange={onChangeHandle} type='text' name="item" placeholder='item...' value={item.name} required/>
        <button type='submit' >Add</button>
      </form>
    </div>
  );
};

export default Form;