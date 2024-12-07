import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const MyComponent = (props) => {
   
   const [sortOption,setSortOption] = useState("sortByInputOrder");
   
     let sortItem ;

     if(sortOption === "sortByInputOrder"){
      sortItem = props.items;
     } else if(sortOption === "sortByItemCount"){
      sortItem = (props.items).slice().sort((a,b)=> a.itemCount - b.itemCount);
     } else if(sortOption ==="sortByItemName"){
      sortItem = (props.items).slice().sort((a,b)=> a.name.localeCompare(b.name));
     } else if(sortOption ==="sortByPackedItem"){
      sortItem = (props.items).slice().sort((a,b) => Number(a.packed) - Number(b.packed));
     }
 
  return (
    <div className='list'>
        <ul >
           {sortItem?.map((item,index)=>{
            return (
                <li key={index}>
                    <input type='checkbox' checked={item.packed} onChange={()=>props.packedItem(index)} />
                    <span style={{ textDecoration: item.packed ? "line-through" : "none"}}>{item.itemCount} {item.name}</span>
                    <button onClick={() => props.deleteItemList(index)}>❌</button>
               </li>
            )
           })}
        </ul>
        <div className='actions'>
          <select value={sortOption} onChange={(e)=>setSortOption(e.target.value)}>
            <option value="sortByInputOrder">Sort Item By input Order </option>
            <option value="sortByItemCount">Sort By Item Count</option>
            <option value="sortByItemName">Sort By Item Name</option>
            <option value="sortByPackedItem">Sort By Packed Status </option>
          </select>
          <button onClick={props.clearAllItem}>Clear All List</button>
        </div>
    </div>   
  );
};

export default MyComponent;