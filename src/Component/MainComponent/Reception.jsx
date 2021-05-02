import React from 'react';
import { Route, Switch } from 'react-router';
import AddStudent from '../Files/AddStudent';
import AddTeacher from '../Files/AddTeacher';
import RecNav from '../Files/RecNav';
import SearchStudent from '../Files/SearchStudent';

function Reception() {
  return (
    <>
    <RecNav/>
    <Switch>
     <Route exact path='/' component={AddTeacher}/>
     <Route exact path='/addstudent' component={AddStudent}/>
     <Route exact path='/searchstudent' component={SearchStudent}/>
     </Switch>
    </>
  );
}

export default Reception;
