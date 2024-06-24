//here the list we are tryign to change is a property inside the listData obect 
//using reducer
import React, { useReducer } from "react";
import {v4 as uuidv4} from 'uuid';
const initialList = [
    {
      id: 'a',
      name: 'Robin',
     
    },
    {
      id: 'b',
      name: 'Dave',
   
    },
  ];
const initialListData = {list : initialList, isShowList :true}  
const App = () => {
    /*CODE FOR USESTATE 
    const [listData, setListData] = React.useState({
      list: initialList,
      isShowList: true,
    });
    const HandleAdd=()=>{
        const newList = listData.list.concat({id : uuidv4() , name : name})
        setListData({...listData , list:newList, isShowList:true})
        setName('')
    }
    */

    const [name, setName] = React.useState('');
    const [listData,dispatchListData] = useReducer(listDataReducer,initialListData)
    const HandleAdd = () =>{
        dispatchListData({type : 'ADD_ITEM' ,id : uuidv4() , name:name })
        setName("")
    }
    
        
    return(
      <div>
      <p> List </p>  
      <AddItem name={name} setName={setName} onAdd={HandleAdd}/>
      {listData.isShowList && <List list={listData.list}/>}
      </div>  
     
    );
  };

const listDataReducer = (state,action) =>{
    console.log(state,action)
    switch(action.type){
        case 'ADD_ITEM':
            return {
                ...state,
                list : state.list.concat({id :action.id , name:action.name})
            }    
        default:
            console.log("error")
            throw new Error();    
    }
}
const AddItem = ({name,setName,onAdd })=>{  
  return(
  <div>
    <input
    type="text"
    value={name}
    onChange={(event)=>setName(event.target.value)}
    />

    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
  );
};


const List = ({list}) =>{
    console.table(list)
  return(
  <ul>
  {list.map((item) => (
    <li key={item.id}>
      <span>{item.name} </span>
    
    </li>
  ))}
</ul>
  );
};

export default App; 