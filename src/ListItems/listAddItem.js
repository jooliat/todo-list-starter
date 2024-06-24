// useReducer to add list


  
const App = () => {
    const [firstName,setItemName ] =React.useState("");
    const [list , dispatchList] = React.useReducer(listReducer,initialList)
    const HandleAdd =() => {
      dispatchList({type:"ADD_ITEM",id: uuidv4(),firstName :firstName })
      setItemName("");
    }

    //console.table(list)

     /*this part was for useState .it is not refactored into useReducer
    const [list, setList] = React.useState(initialList);
    const handleAddButton = () =>{
      const newList = list.concat(,})
      setList(newList)
      console.table(newList)
      setItemName("")
    };
    */
    
    
    return(
      <div>
      <AddItem firstName={firstName} setItemName={setItemName} onAdd={HandleAdd}/>
      <List list={list}/>
      </div>  
     
    );
  };

const listReducer = (state,action) =>{
  switch(action.type){
    case 'ADD_ITEM':{
      console.log("add item")
      console.table(state)
      return state.concat({id : action.id ,firstName :action.firstName })
      
    }
    default:
      console.log("erroe")
      return state;
  }

}  

const AddItem = ({firstName,setItemName,onAdd })=>{  
  return(
  <div>
    <input
    type="text"
    value={firstName}
    onChange={(event)=>setItemName(event.target.value)}
    />

    <button type="button" onClick={onAdd}>
      Add
    </button>
  </div>
  );
};


const List = ({list}) =>{
  return(
  <ul>
  {list.map((item) => (
    <li key={item.id}>
      <span>{item.firstName} </span>
    
    </li>
  ))}
</ul>
  );
};

 export default App; 