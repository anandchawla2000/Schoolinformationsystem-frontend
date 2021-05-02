import axios from "axios";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
function AddTeacher() {
  const [form, fullform] = useState({});
  const onSubmits = (event) => 
  {
    event.preventDefault();
    console.log(form);
    post(form)
  };
  const inputEvent =(e) =>
  {
    const id =e.target.id;
    const value =e.target.value;
    fullform({...form,[id]:value});
  }
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
    axios.post(`http://localhost:8080/addteacher`,data).then(
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
                  <label for="examplename">Enter Name:</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Enter Name"
                    id="fname"
                    onChange={inputEvent}
                  />
                </div>
                <div class="form-group">
                  <label for="exampleFormControlSelect1">Example select</label>
                  <select class="form-control" id="classall"
                    onChange={inputEvent}
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
                    onChange={inputEvent}
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
                      Add Teacher
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

export default AddTeacher;
