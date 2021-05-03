import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { baseUrl } from "./base";
import Modal from "./Modal";
const ProfileTeacher = () => {
  const [Id, setId] = useState();
  const Card = (props) => {
    return (
      <>
        <div class="col-sm-1 col-xl-4 col-l-3 col-md-4 mt-4 ">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Student Name : {props.studentname}</h5>
              <p class="card-text">
                <p>Admisson id: {props.admissionid}</p>
                <p>Date of birth: {props.dob}</p>
              </p>
              <div class="text-center">
                <button
                  class="btn btn-btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setId(props.admissionid);
                  }}
                >
                  Update Details
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    const id = localStorage.getItem("teacid");
    axios.get(`${baseUrl}/details/${id}`).then(
      (response) => {
        setinfo(response);
      },
      (error) => {
        alert("something Wrong");
      }
    );
  }, []);
  const [info, setinfo] = useState([]);
  console.log(info.data);
  if (info.data === null || info.data === undefined) {
    return "";
  } else {
    function studentcard(val) {
      console.log(val.admissionid);
      return (
        <>
          <Card
            admissionid={val.admissionid}
            studentname={val.fname}
            dob={val.dob}
            batch={val.classall}
          />
        </>
      );
    }
    return (
      <>
        <div class="container">
          <div class="text-center">
            <h1>Student List</h1>
          </div>
          <div class="row">
            {info.data.map(studentcard)}
            <Modal value={Id} />
          </div>
        </div>
      </>
    );
  }
};

export default ProfileTeacher;
