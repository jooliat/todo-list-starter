//here the list we are tryign to change is a property inside the listData obect 
//using useState
import React from "react";
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
const App = () => {
    const [listData, setListData] = React.useState({
      list: initialList,
      isShowList: true,
    });
    const [name, setName] = React.useState('');
  
    const HandleAdd=()=>{
        const newList = listData.list.concat({id : uuidv4() , name : name})
        setListData({...listData , list:newList, isShowList:true})
        setName('')
    }


        
    return(
      <div>
      <p> List </p>  
      <AddItem name={name} setName={setName} onAdd={HandleAdd}/>
      {listData.isShowList && <List list={listData.list}/>}
      </div>  
     
    );
  };

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