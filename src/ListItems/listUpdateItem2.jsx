//using useREducer
import React from 'react';
import list from  './list'
const App = () => {

    
    const ToggleComplete = (id)=>{
       dispatchRemoveList({type:'REMOVE_ITEM',id:id})
       
    }
    const [taskList,dispatchRemoveList] = React.useReducer(itemUpdateReducer,list)
    return (
     <List   list={taskList} ToggleComplete={ToggleComplete}  />
    );
  };
  
const itemUpdateReducer = (state,action)=>{
  switch(action.type){
    case "REMOVE_ITEM":
      {
       return state.map(item => {
          if(item.id == action.id){
            //console.log(item)
            const newItem = {...item , isComplete: !item.isComplete}
            return newItem
          }
          return item;
        })  
  
      }
     default:
      throw new Error(); 

  }
} 

const List = ({list, ToggleComplete}) => (
    <ul>
      {list.map(item => <Item item={item} ToggleComplete={ToggleComplete}/>)}
    </ul>);
  
    
const Item = ({item,ToggleComplete}) =>(
    <li key={item.id}>
      <span style={{textDecoration: item.isComplete ? 'line-through' : 'none'}}>
        {item.task}
      </span>
      <button type='button' onClick={() => ToggleComplete(item.id)}>
        {item.isComplete ? 'UNDO' : 'DONE'}
      </button>
   </li>
)
  
  
export default App;