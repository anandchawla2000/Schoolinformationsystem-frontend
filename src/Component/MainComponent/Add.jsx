import React from 'react';
import { useState } from 'react'
import App from '../../App';
import AddStudent from '../Files/AddStudent';
import AddTeacher from '../Files/AddTeacher';
function Add() {
    const [state, setState] = useState(<App/>)
  return (
    <div>
        <button onClick={()=>{
            setState(<AddTeacher/>)
        }}>Add Teacher</button>
        
        <button onClick={()=>{
            setState(<AddStudent/>)
        }}>Add Student</button>
     <div>
       {state}
     </div>
     </div>
  );
}

export default Add;