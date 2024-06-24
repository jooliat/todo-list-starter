//item removed using use state
import React from "react";

const initialList = [
    {
      id: 'a',
      firstname: 'Robin',
      lastname: 'Wieruch',
      year: 1988,
    },
    {
      id: 'b',
      firstname: 'Dave',
      lastname: 'Davidds',
      year: 1990,
    },
    {
      id: 'c',
      firstname: 'Ryan',
      lastname: 'Reynolds',
      year: 1980,
    },
  ];
  
const App = () => {
    const [list, dispatchList] = React.useReducer(listRemoveReducer,initialList);
    
    const handleRemove = (id) =>{
        dispatchList({type:'REMOVE_ITEM',id:id})
    }
     

    return (
        <div>
            <List list={list} handleRemove={handleRemove}/>
        </div>
    );
};

const listRemoveReducer = (state,action) =>{
    switch(action.type){
        case 'REMOVE_ITEM':{
            //console.log(state,action)
            const newList = state.filter(item =>item.id !== action.id)
            return newList
        }
        default:
            //console.log("default case called")
    }
}

const List = ({list,handleRemove}) =>{
    //console.table(list)
    return(
        <ul>
            {list.map((item) => (
                <li key={item.id}>
                <span>{item.firstname}</span>
                <span>{item.lastname}</span>
                <span>{item.year}</span>
                <button  
                type="button"
                onClick={() => handleRemove(item.id)}> 
                Remove 
                </button>
                </li>
                
            ))}
            </ul>
    )

}

export default App;