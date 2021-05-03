import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { reducer } from "../Files/Reducer";
import { contextUser } from "../MainComponent/Mainnav";
import { baseUrl } from "./base";
const Login = () => {
  const history = useHistory();
  const [String, SetString] = useState({});
  const { state, dispatch } = useContext(contextUser);
  const [login, fulllogin] = useState({});
  const onSubmits = async(event) => {
    event.preventDefault();
    if(login.email==="anand@admin.com"&&login.password==="owner")
    {
      dispatch({type:"Admin",payload:"Adminlogin"})
      history.push('/addteacher');
    }
    else{
    loginapi(); }
  };
  function loginapi() {
        axios
        .get(`${baseUrl}/sign/`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          params: { email: login.email, password: login.password },
        }).then(
          (response) => {
            console.log(response.data.type);
            if(response.data.type==="khali")
            {
               alert("wrong details");
            }
            else if(response.data.type==="Student")
            {  dispatch({type:"Admin",payload:"Studentlogin"})
              const stuid=response.data.data[0].admissionid;
              localStorage.setItem('stuid', stuid);
              history.push('/information');
            }
            else if(response.data.type==="teacher")
            { dispatch({type:"Admin",payload:"teacherlogin"})
              console.log(response.data.data[0].admissionid);
              const teacid=response.data.data[0].id;
              localStorage.setItem('teacid', teacid);
              history.push('/profile');
            }
          },
          (error) => {
            alert("something Wrong");
          }
        );
  }
  return (
    <>
      <div class="container mt-3">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <h2 class="text-center">Enter Login Details:</h2>
              <form onSubmit={onSubmits}>
                <div class="form-group">
                  <label for="examplename">Email:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => {
                      fulllogin({ ...login, email: e.target.value });
                    }}
                  />
                </div>
                <div class="form-group">
                  <label for="examplename">Password</label>
                  <input
                    type="password"
                    class="form-control"
                    placeholder="Enter password"
                    id="password"
                    onChange={(e) => {
                      fulllogin({ ...login, password: e.target.value });
                    }}
                  />
                </div>
                <div class="container">
                  <div class="text-center">
                    <button type="submit" class="btn btn-success">
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
