import React , { useState, useContext ,useEffect} from 'react'
import { useHistory } from 'react-router'
import { contextUser } from '../MainComponent/Mainnav';

const Logout = () => {
    const history = useHistory();
    const { state, dispatch } = useContext(contextUser);
    useEffect(() => {
        dispatch({type:"Admin",payload:"logout"})
      history.push('/');
        
    }, [])
    return(
        <>
        </>
    )
}

export default Logout