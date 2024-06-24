import React from 'react';
//<input type='checkbox' onChange={handleCompleteToggle(item.id)} />
const Item =({item,handleCompleteToggle,RemoveItem}) =>{
    //console.log(item)
    return(
        <div>
            <li  className='todo'>

                <input className="left" type='checkbox' checked={item.isComplete} onChange={()=>handleCompleteToggle(item)} />
                {item.isComplete ? <p style={{color:'green'}}> {item.task} </p>  : <span>{item.task}</span>}
                
            
                    <p>{item.added}</p>

               
            
                <button className='clear-button'type='button' onClick={()=>RemoveItem(item)} >
                    X
                </button>
               
                
        
            </li>
            
        </div>
    )
}
  
export default Item;