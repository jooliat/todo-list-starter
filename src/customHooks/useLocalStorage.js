const useLocalStorage = (key,fallback) =>{
    const [state,setState] = React.useState(
        JSON.parse(localStorage.getItem(key) || fallback)
    );

    React.useEffect(() =>{
    localStorage.setItem(key,JSON.stringify(state))
    },[state,key])

    return [state,setState]
}

export default useLocalStorage;