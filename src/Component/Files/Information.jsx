import React, { useEffect, useState } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { baseUrl } from "./base";
import axios from "axios";
import { StudentInfo } from "./AllPart";
import { ToastContainer, toast } from "react-toastify";
import "../../../node_modules/react-toastify/dist/ReactToastify.css";

const Information = () => {
  // Use Effect Call
  useEffect(() => {
    const id = localStorage.getItem("stuid");
    console.log(id);
    axios.get(`${baseUrl}/info/${id}`).then(
      (response) => {
        console.log(response);
        setinfo(response);
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
  }, []);

  const [info, setinfo] = useState([]);
  console.log(info.data);
  if (info.data === null || info.data === undefined) {
    return "";
  } else {
    //Information from AllPArt
    return (
      <>
        <StudentInfo value={info}/>
        <ToastContainer />
      </>
    );
  }
};

export default Information;
