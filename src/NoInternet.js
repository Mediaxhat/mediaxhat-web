import React, {useState, useEffect} from 'react';

const NoInternet = (props) => {
    // state variable holds the state of the internet connection
    const [isOnline, setOnline] = useState(true);

    // On initization set the isOnline state.
    useEffect(()=>{
        setOnline(navigator.onLine)
    },[])

    // event listeners to update the state 
    window.addEventListener('online', () => {
        setOnline(true)
    });

    window.addEventListener('offline', () => {
        setOnline(false)
    });

    // if user is online, return the child component else return a custom component
    if(isOnline){
    return(
        props.children
    )
    } else {
        return(<h1>Sorry no internet connection.<br></br> Please try later when you have internet.</h1>)
    }
}

export default NoInternet;