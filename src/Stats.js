import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';

const Stats = (props) => {
  

  if(props.itemCount === 0){
      return <footer className='stats'>
               <p> please at some items 💼 </p>
             </footer>
  }

  return (
    <footer className='stats'>
         {props.packedCount === props.itemCount ? <em>You're Ready TO GO ✈</em> :<em>You have {props.itemCount} item  on your list, and you already packed {props.packedCount} 💼 </em>}
    </footer>
  );
};

export default Stats;