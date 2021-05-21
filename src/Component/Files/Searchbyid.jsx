import axios from "axios";
import React, { useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { StudentInfo } from "./AllPart";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

const Searchbyid = () => {
  const [Info, setInfo] = useState({});
  const [Div, setDiv] = useState(<></>);
 
  //axios call
  const search = (event) => {
    event.preventDefault();
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
  
  // Stundent detail body
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
};

export default Searchbyid;
