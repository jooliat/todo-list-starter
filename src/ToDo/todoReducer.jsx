import React from "react";
import {v4 as uuidv4} from 'uuid';

const todoReducer = (state,action)=>{
  //console.table(state,action)
  switch(action.type){
    case'TOGGLE_TODO':
    console.log("toggle todo called")
      return state.map(todo =>
        todo.id === action.id ? {...todo , isComplete :!todo.isComplete}  : todo//to toggle 
        
      )
    
    case 'ADD_TODO':  
      if(action.task=="" || action.task=="Add task here..."){
        alert("cannot add an empty task")
        console.log("cannot add an empty task")
        console.log(action.task)
        return state;
      }
     let newList = state.concat({id:uuidv4() , task : action.task ,isComplete:false , added : action.added})
     console.log("add todo called")
      return newList;
      
    
    case 'REMOVE_TODO':
      console.log("remove todo called")
      return  state.filter(item=>{
        if(action.id != item.id)
          return item
      })  
      
      
 
    default :
      console.log("default case")
      return state;  
  }
}

export default todoReducer;

 