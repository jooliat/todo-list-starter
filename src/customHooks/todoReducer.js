import React from "react";
const init_todos = [
  {
    id: 'a',
    task: 'Learn React',
    complete: false,
  },
  {
    id: 'b',
    task: 'Learn Firebase',
    complete: false,
  },
  {
    id:'c',
    task :'Learn Redux',
    complete:false,

  },
];

const todoReducer = (state,action)=>{
  switch(action.type){
    case'TOGGLE_TODO':
      return state.map(todo =>
        todo.id === action.id ? {...todo , complete :!todo.complete}  : todo//to toggle 
      )
    /* COMBINING DO_TODO AND UNDO_TODO INTO TOGGLE_TODO
    case 'UNDO_TODO':
      return state.map(todo=> {
        if(todo.id === action.id){
          return {...todo , complete :!todo.complete}
        }  
        else{
          return {...todo}
        }
      })  
    */  
    default :
      return state;  
  }
}

const App = () =>{
  const handleChange = (todo) => {
    //console.log(todo.id,todo.complete)
    dispatch({ type :'TOGGLE_TODO' , id :todo.id})
   
  }
  const [todos,dispatch] = React.useReducer(todoReducer,init_todos)
  //use effect is only for debugging
  React.useEffect(()=>{
    console.log('useeffect called')
    console.table(todos)
  },[todos])

  return (
    <div>
      <ul>
        {todos.map(todo =>(
          <li key={todo.id}>
            <label>
              <input type="checkbox" 
                     checked={todo.complete}
                     onChange={() => handleChange(todo)}/>
              {todo.task}
            </label>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App;