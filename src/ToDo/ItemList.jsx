import React from 'react';
import Item from './Item';

const ItemList =({list,handleCompleteToggle,RemoveItem}) =>{
    return(
        <div >
            <ul>
            {list.map(item => (
               <Item key={item.id}item={item} handleCompleteToggle={handleCompleteToggle} RemoveItem={RemoveItem}/>
            ))
            }
            </ul>
        </div>
    )
}
  
export default ItemList;