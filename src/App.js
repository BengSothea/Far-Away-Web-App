import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Form from './Form';
import List from './List'
import Stats from './Stats'
import Logo from './Logo';

const App = () => {

  const [allItem,setAllItem] = useState([]);
  function addItemHandle(item){
    setAllItem((previtem) =>[...previtem,item]);
  }

  function deleteItem(id){
    setAllItem((previtem) => {
        return previtem.filter((allItem,index) => index !== id);
    })
  }

  function packedItem(id){
      setAllItem((previtem) =>{
        return previtem.map((allItem,index)=>{
          if(index === id){
            return {
              ...allItem,
              packed: !allItem.packed
            }
          }
          return allItem;
        })
      })
  }

  function clearAllItem(){
    const confirm = window.confirm("Are you sure you wanna delete all item ?")
     if(confirm) setAllItem([]); // return null array
  }


  function sumPackedItem(){
    return allItem.filter(item => item.packed === true).length;
  }

  return (
    <div className="app">
    <Logo />
    <Form addItem={addItemHandle} />
    <List items={allItem}
      deleteItemList={deleteItem}
      packedItem={packedItem} 
      clearAllItem={clearAllItem}
      />
    <Stats packedCount={sumPackedItem()} itemCount={allItem.length}/>
  </div>
  )
}

export default App;