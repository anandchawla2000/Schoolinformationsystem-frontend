import React, { createContext, useReducer } from "react";
import Navbar from "../Files/Navbar";
import { Route, Switch } from "react-router";
import AddStudent from "../Files/AddStudent";
import AddTeacher from "../Files/AddTeacher";
import SearchStudent from "../Files/SearchStudent";
import Login from "../Files/Login";
import Logout from "../Files/Logout";
import Home from "../MainComponent/Home";
import { initialState, reducer } from "../Files/Reducer";
import ProfileTeacher from "../Files/ProfileTeacher";
import Information from "../Files/Information";

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
        </Switch>
      </contextUser.Provider>
    </>
  );
};

export default Mainnav;
