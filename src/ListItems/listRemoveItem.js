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
  ];
  
const App = () => {
    const [list, setList] = React.useState(initialList);
    const handleRemove = (id) =>{
        const newList = list.filter(item =>item.id !== id)
        setList(newList)
        console.log(`item id is ${id}`)
        console.table(newList)
    }

    return (
        <div>
            <List list={list} handleRemove={handleRemove}/>
        </div>
    );
};

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