import axios from "axios";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function AddStudent() {
 const [form, fullform] = useState({});
  const onSubmits = (event) => 
  {
    event.preventDefault();
    console.log(form);
    post(form)
  }; 

  const setPass =()=>{
    fullform((prevvalue)=>{
      const fname = prevvalue.fname;
      const classall = prevvalue.classall;
      const res = fname.split(" ");
      const password = `${res[0]}${classall}`
      fullform({...form,password:password})
    })
  }
  const post = (data)=>{
    axios.post(`http://localhost:8080/addstudent`,data).then(
      (response)=>{console.log(response)},
      (error)=>{console.log(error)}
    );
  }
  return (
    <>
      <div class="container mt-3">
        <div class="card">
          <div class="card-body">
            <div class="container">
              <h1 class="text-center">Enter Details:</h1>
              <form onSubmit={onSubmits}>
              <div class="form-group">
                  <label for="examplename">Enter Student id:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter student id"
                    id="adid"
                    onChange={(e)=>{fullform({...form,admissionid:parseInt(e.target.value)})}}
                  />
                </div>
                <div class="form-group">
                  <label for="examplename">Enter Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                    id="fname"
                    onChange={(e)=>{fullform({...form,fname:e.target.value})}}
                  />
                </div>
                <div class="form-group">
                  <label for="exampledob">Enter Date of Birth:</label>
                  <input
                    type="date"
                    class="form-control"
                    id="dob"
                    onChange={(e)=>{fullform({...form,dob:e.target.value})}}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select class="form-control" id="classall"
                    onChange={(e)=>{fullform({...form,classall:e.target.value})}}
                  >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div class="form-group">
                  <label for="exampleInputEmail1"> Enter Email address:</label>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Enter email"
                    id="email"
                    onChange={(e)=>{fullform({...form,email:e.target.value})}}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleInputaddres"> Enter Address:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Address"
                    id="Add"
                    onChange={(e)=>{fullform({...form,add:e.target.value})}}
                  />
                </div>
                <div class="container">
                  <div class="text-center">
                    <button type="submit" class="btn btn-success" onClick={setPass}>
                      Add Student
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
}

export default AddStudent;
