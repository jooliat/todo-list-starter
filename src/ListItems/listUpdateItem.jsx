//using useState
import React from 'react';
import list from  './list'
const App = () => {

    
    const [taskList,setList] = React.useState(list)
    const ToggleComplete = (id)=>{
        const newList = taskList.map(item => {
            if(item.id == id){
              //console.log(item)
              const newItem = {...item , isComplete: !item.isComplete}
             
              return newItem
            }
            return item;
            
        })
        console.table(newList)
        setList(newList)
       
    }
    return (
     <List   list={taskList} ToggleComplete={ToggleComplete}  />
    );
  };
  
 

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