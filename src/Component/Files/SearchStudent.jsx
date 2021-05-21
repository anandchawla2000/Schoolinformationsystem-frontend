import axios from "axios";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StudentInfo, TeacherInfo } from "./AllPart";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

function SearchStudent() {
  const [Info, setInfo] = useState({});
  const [Div, setDiv] = useState(<></>)
   //Serach button
  const search = (event) => {
    event.preventDefault();
    //alert(Info.search);
    if (Info.search == "Student") {
      studentCall();
    } else {
      teacherCall();
    }
  };
  
  //StudentCall
  const studentCall = () => {
    axios.get(`${baseUrl}/info/${Info.id}`).then(
      (response) => {
        console.log(response);
        setDiv(<StudentInfo value={response}/>);
      },
      (error) => {
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
  
  //Teacher call
  const teacherCall = () => {
    axios.get(`${baseUrl}/teacher/${Info.id}`).then(
      (response) => {
        console.log(response);
        setDiv(<TeacherInfo value={response}/>);
       },
      (error) => {
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
  
  // Serach STudent
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column" style={{ margin: "auto" }}>
            <form className="form-inline my-2 my-lg-0" onSubmit={search}>
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Enter ID"
                aria-label="Enter Id"
                required
                onChange={(e) => {
                  setInfo({ ...Info, id: e.target.value });
                }}
              />
              <select
                className="custom-select my-2 my-sm-0 mr-sm-2"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                onChange={(e) => {
                  setInfo({ ...Info, search: e.target.value });
                }}
              >
                <option>Student</option>
                <option selected>Teacher</option>
              </select>
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
        <div className="container">{Div}</div>
      </div>
    </>
  );
}

export default SearchStudent;
