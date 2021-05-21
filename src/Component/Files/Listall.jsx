import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./design.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stundentlist, Teacherlist } from "./AllPart";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

const Listall = () => {
    const [List, setList] = useState(<></>)
    
    //For StudentList
    const Student = () =>{
        axios.get(`${baseUrl}/List`).then(
            (response) => {
              console.log(response);
              if(response=="") return ''; 
              else
              setList(<Stundentlist value={response}/>)
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
    }

    //For Teacher LIst
    const Teacher = () =>{
        axios.get(`${baseUrl}/Listteacher`).then(
            (response) => {
              console.log(response);
              if(response=="") return ''; 
              else
              setList(< Teacherlist value={response}/>)
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
    }

    //List Body
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="text-center">
              <button type="button" className="btn btn-primary"
              onClick={Teacher}
              >
                Teacher
              </button>
             <button type="button" className="btn btn-primary ml-5"
             onClick={Student}
             >
                Student
              </button>
            </div>
          </div>
        </div>
        <div className="">
            {List}
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Listall;
