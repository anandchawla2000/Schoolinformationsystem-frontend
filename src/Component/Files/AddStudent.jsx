import axios from "axios";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";
import { baseUrl } from "./base";
import "./design.css";

function AddStudent() {
  const [ID, setID] = useState();
  const [form, fullform] = useState({});

  //OnSubmit action
  const onSubmits = (event) => {
    event.preventDefault();
    console.log(form);
    post(form);
  };

  //Password alogo
  const setPass = () => {
    fullform((prevvalue) => {
      const fname = prevvalue.fname;
      const classall = prevvalue.classall;
      const res = fname.split(" ");
      const password = `${res[0]}${classall}`;
      fullform({ ...form, password: password });
    });
  };

  //axios call for database
  const post = (data) => {
    axios.post(`${baseUrl}/addstudent`, data).then(
      (response) => {
        console.log(response);
        toast.success("successfully Added", {
          position: "top-right",
          autoClose: 1500,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      },
      (error) => {
        console.log(error);
        toast.error("Something Went Wrong!", {
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
  };
  //Form Add Student
  return (
    <>
      <div className="container mt-3 custo">
        <div className="card">
          <div className="card-body">
            <div className="container">
              <h1 className="text-center headindadd">Enter Details:</h1>
              <form onSubmit={onSubmits}>
                <div className="form-group">
                  <label for="examplename">Enter Name:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                    id="fname"
                    required
                    onChange={(e) => {
                      fullform({ ...form, fname: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="exampledob">Enter Date of Birth:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dob"
                    required
                    onChange={(e) => {
                      fullform({ ...form, dob: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleFormControlSelect1">Select Batch</label>
                  <select
                    className="form-control"
                    id="classall"
                    onChange={(e) => {
                      fullform({ ...form, classall: e.target.value });
                    }}
                  >
                    <option selected>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="form-group">
                  <label for="exampleInputEmail1"> Enter Email address:</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter email"
                    id="email"
                    required
                    onChange={(e) => {
                      fullform({ ...form, email: e.target.value });
                    }}
                  />
                </div>
                <div className="form-group">
                  <label for="exampleInputaddres"> Enter Address:</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Address"
                    id="Add"
                    required
                    onChange={(e) => {
                      fullform({ ...form, add: e.target.value });
                    }}
                  />
                </div>
                <div className="container">
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn btn-success"
                      onClick={setPass}
                    >
                      Add Student
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
}

export default AddStudent;
