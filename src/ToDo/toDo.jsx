import React from 'react';
import './App.css';
import AddItem from './AddItem'
import HeadingUI from './HeadingUI';
import list from './list';
import todoReducer from './todoReducer';
import ItemList from './ItemList';
import CompletedList from './CompletedList';
import date from './Date';


const App = ()=> {

    // field to add an item
    const [task,setTask] = React.useState("Add task here...")
    const handleTaskChange = (value) => setTask(value)
    const addNewItem = (value) => {
        dispatch({type:'ADD_TODO',task:value , isComplete:false ,added:date(new Date())})
        setTask("Add task here...")
    }
   

    
    // for toggle  todo list
    const [todos,dispatch] = React.useReducer(todoReducer,list)
    // when checkbox is toggled,it checks the item and then moves the item to the completed item list
    const handleCompleteToggle = (item) =>{
      dispatch({type:'TOGGLE_TODO' , id:item.id})
      dispatch({type:'REMOVE_TODO' , id:item.id})
      setCompletedList(completedList.concat(item))
      //console.log("COMPLETED LIST " + completedList)
      //coconsole.log("COMPLETED LIST " + completedList)
      //console.log("handled toggle todo dispatch" +item.id)

    }
    
    // to remove item from todo list
    const RemoveItem = (item) => {
      dispatch({type:'REMOVE_TODO' , id:item.id})
  
    }

    // to add removed item to new list
    const [completedList, setCompletedList] = React.useState([])
    const handleIncompleteClick =(item) =>{
      dispatch({type:'ADD_TODO', id:item.id , task:item.task ,isComplete:false, added:item.added})

    }
    //moving checked items from to do list to completed list
    const removeIncompleted = (item) =>{
      let newList = completedList.filter(completedItem=>item.id !=completedItem.id)
      //console.log(newList)
      setCompletedList(newList)
    }
    
    return (
        <div className="app">
         <HeadingUI />
          <div className="input">
            <AddItem item={task} handleTaskChange={handleTaskChange} addNewItem={addNewItem}/>
          </div>
          <div className="todos">
            <div>
                <ItemList list={todos} handleCompleteToggle={handleCompleteToggle} RemoveItem={RemoveItem}/> 
                <br/>
                <div className='completedHeading'>
                  <h2 className='subHeading'>Completed List</h2>
                  <button type="button" onClick={()=>setCompletedList([])} className='clear-button'> CLEAR</button>
                </div>
                <CompletedList list={completedList} 
                removeIncompleted={removeIncompleted}
                handleIncompleteClick={handleIncompleteClick}
                />
                
                              
            </div>
          </div>
        </div>
      );
}

export default App;