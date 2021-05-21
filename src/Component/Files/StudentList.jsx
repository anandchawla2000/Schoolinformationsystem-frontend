import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./design.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Stundentlist, Teacherlist } from "./AllPart";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

const StudentList = () =>{
    const [List, setList] = useState(<></>)
    const id = localStorage.getItem("teacid");
    console.log(id);
    //use effect and ajax call for Specify student List 
    useEffect(() => {
        axios.get(`${baseUrl}/Student/${id}`).then(
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
    }, [])
    // Student list body
    return(<>
     <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="text-center">
            </div>
          </div>
        </div>
        <div className="">
            {List}
        </div>
        <ToastContainer />
      </div>
    </>);
}

export default StudentList;