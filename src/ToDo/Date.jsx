const date = (curDate) =>{
    const options = { 
        //year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour: '2-digit', 
        minute: '2-digit', 
        //second: '2-digit' 
      };
return( curDate.toLocaleDateString(undefined,options));

}

export default date;