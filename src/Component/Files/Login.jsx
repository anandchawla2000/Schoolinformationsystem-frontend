import axios from "axios";
import React, { useState, useContext } from "react";
import { useHistory } from "react-router";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { reducer } from "../Files/Reducer";
import { contextUser } from "../MainComponent/Mainnav";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import "./design.css";

const Login = () => {
  const history = useHistory();
  const [String, SetString] = useState({});
  const { state, dispatch } = useContext(contextUser);
  const [login, fulllogin] = useState({});

  //onSubmit verify details admin or call axios
  const onSubmits = async (event) => {
    event.preventDefault();
    //Check adim details
    if (login.email === "anand@admin.com" && login.password === "owner") {
      dispatch({ type: "Admin", payload: "Adminlogin" });
      history.push("/addteacher");
    } else {
      loginapi();
    }
  };

  //Axios Call
  function loginapi() {
    axios
      .get(`${baseUrl}/sign/`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        params: { email: login.email, password: login.password },
      })
      .then(
        (response) => {
          console.log(response.data.type);
          if (response.data.type === "khali") {
            toast.error("Invalid credentials", {
              position: "top-right",
              autoClose: 1500,
              hideProgressBar: true,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
          } else if (response.data.type === "Student") {
            dispatch({ type: "Admin", payload: "Studentlogin" });
            const stuid = response.data.data;
            localStorage.setItem("stuid", stuid);
            history.push("/information");
          } else if (response.data.type === "teacher") {
            dispatch({ type: "Admin", payload: "teacherlogin" });
            console.log(response.data);
            const teacid = response.data.data[0].classall;
            localStorage.setItem("teacid", teacid);
            history.push("/profile");
          }
        },
        (error) => {
          //alert("something Wrong");
          toast.error("Server Down!", {
            position: "top-right",
            autoClose: 1500,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  }

  // Login Form
  return (
    <>
      <div className="container mt-4 custo">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <h2 className="text-center">Enter Login Details:</h2>
              <form
                className="needs-validation"
                onSubmit={onSubmits}
                novalidate
              >
                <div className="form-group">
                  <label for="examplename">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    id="email"
                    onChange={(e) => {
                      fulllogin({ ...login, email: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="form-group">
                  <label for="examplename">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                    id="password"
                    onChange={(e) => {
                      fulllogin({ ...login, password: e.target.value });
                    }}
                    required
                  />
                </div>
                <div className="container">
                  <div className="text-center">
                    <button type="submit" className="btn btn-success">
                      Login
                    </button>
                    <ToastContainer />
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
