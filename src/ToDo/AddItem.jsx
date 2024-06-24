import React from 'react';
const AddItem = ({item,handleTaskChange,addNewItem}) =>{
    return(
        <>
        <input
        type="text"
        value={item}
        onChange={(event)=>handleTaskChange(event.target.value)}
        onClick={() => handleTaskChange("")}

        />
        <button className='add-button' onClick={()=>addNewItem(item)}>
            ADD
        </button>
       </>
    )   

}

export default AddItem;