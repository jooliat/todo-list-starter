import React from 'react';
import Item from './Item';

const CompletedList =({list,handleIncompleteClick,removeIncompleted}) =>{
    //console.log(list)
    //const newList = list.filter(item=>item.isComplete);
    //const handleIncomplete (item)
    const handleClick = (item)=>{
        handleIncompleteClick(item)
        removeIncompleted(item)
    }
    return(
        <div className='todos'>
            <ul>
              
            {list.map(item => (
               <li  className='todo' key={item.id}>
               <p style={{color:'green'}}> {item.task} </p>
               <button className='clear-button 'type='button'onClick={()=>handleClick(item)}>
                INCOMPLETE
               </button>
           
               
       
           </li>
            ))
            }
            </ul>
        </div>
    )
}
  
export default CompletedList;