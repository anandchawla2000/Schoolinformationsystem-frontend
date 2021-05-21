import React, { createContext, useReducer } from "react";
import Navbar from "../Files/Navbar";
import { Route, Switch } from "react-router";
import AddStudent from "../Files/AddStudent";
import AddTeacher from "../Files/AddTeacher";
import SearchStudent from "../Files/SearchStudent";
import Login from "../Files/Login";
import Logout from "../Files/Logout";
import { initialState, reducer } from "../Files/Reducer";
import ProfileTeacher from "../Files/ProfileTeacher";
import Information from "../Files/Information";
import Home from "../Files/Home";
import Listall from "../Files/Listall";
import Searchbyid from "../Files/Searchbyid";
import StudentList from "../Files/StudentList";



export const contextUser = createContext();

const Mainnav = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log(state);
  return (
    <>
      <contextUser.Provider value={{ state, dispatch }}>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/addteacher" component={AddTeacher} />
          <Route exact path="/addstudent" component={AddStudent} />
          <Route exact path="/searchstudent" component={SearchStudent} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/profile" component={ProfileTeacher} />
          <Route exact path="/information" component={Information} />
          <Route exact path="/List" component={Listall} />
          <Route exact path="/search" component={Searchbyid} />
          <Route exact path="/studentlist" component={StudentList} />
        </Switch>
      </contextUser.Provider>
    </>
  );
};

export default Mainnav;
