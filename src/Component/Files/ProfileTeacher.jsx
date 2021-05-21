import axios from "axios";
import React, { useEffect, useState, createContext, useContext } from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { baseUrl } from "./base";
import { ToastContainer, toast } from "react-toastify";

const ProfileTeacher = () => {
  //updated form
  const NewModal = (props) => {
    const [Academicinfo, setAcademicinfo] = useState({});
    const [Personalinfo, setPersonalinfo] = useState({});
    const [show, setshow] = useState();
    // for upadte id in personalinfo
    const psinfo = () => {
      setPersonalinfo({
        ...Personalinfo,
        id: props.value,
      });
    };
    //for update id in academic info
    const acainfo = () => {
      setAcademicinfo({
        ...Academicinfo,
        id: props.value,
      });
    };
    // ajax call for ps info
    const pssub = (event) => {
      event.preventDefault();
      console.log(Personalinfo);
      axios.post(`${baseUrl}/peronalinfo`, Personalinfo).then(
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
    //ajax call for academic info
    const acasub = (event) => {
      event.preventDefault();
      console.log(Academicinfo);
      axios.post(`${baseUrl}/academicinfo`, Academicinfo).then(
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

    const data = () => {
      //Academic Form
      if (show === 1) {
        return (
          <>
            <div class="container mt-3">
              <div class="text-center">
                <h5>Enter Details</h5>
              </div>
              <div>
                <form onSubmit={acasub}>
                  <table class="table table-borderless mt-3">
                    <tbody>
                      <tr>
                        <th>Enter 12th Percentage</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter 12th Percentage"
                              required
                              onChange={(e) => {
                                setAcademicinfo({
                                  ...Academicinfo,
                                  classXII: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter 10th Percentage</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter 10th Percentage"
                              required
                              onChange={(e) => {
                                setAcademicinfo({
                                  ...Academicinfo,
                                  classX: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Co curricular activities</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <textarea
                              required
                              onChange={(e) => {
                                setAcademicinfo({
                                  ...Academicinfo,
                                  extraAcademicinfo: e.target.value,
                                });
                              }}
                            ></textarea>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Certificate</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <textarea
                              required
                              onChange={(e) => {
                                setAcademicinfo({
                                  ...Academicinfo,
                                  certificate: e.target.value,
                                });
                              }}
                            ></textarea>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div>
                    <div class="text-center">
                      <button
                        type="submit"
                        class="btn btn-success"
                        onClick={acainfo}
                      >
                        Update Academic Info
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      }
      //Personal info
      if (show === 2) {
        return (
          <>
            <div class="container mt-3">
              <div class="text-center">
                <h5>Enter Details</h5>
              </div>
              <div>
                <form onSubmit={pssub}>
                  <table class="table table-borderless mt-3">
                    <tbody>
                      <tr>
                        <th>Enter Father Name</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter Father Name"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  fatherName: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter Mother Name</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter Mother Name"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  motherName: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter aadhar card</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter aadhar card"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  aadharCard: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter Pin code</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter pincode"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  pinCode: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter District </th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter district"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  district: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter Parents Phone number</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <input
                              type="text"
                              class="form-control"
                              aria-label="Sizing example input"
                              aria-describedby="inputGroup-sizing-sm"
                              placeholder="enter parents phone"
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  parentsPhone: e.target.value,
                                });
                              }}
                            />
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Select Blood group</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <select
                              class="form-control"
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  bloodGroup: e.target.value,
                                });
                              }}
                            >
                              <option>A+</option>
                              <option>A-</option>
                              <option>B+</option>
                              <option>B-</option>
                              <option>O+</option>
                              <option>O-</option>
                            </select>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <th>Enter Hobbies</th>
                        <td>
                          <div class="input-group input-group-sm mb-3">
                            <textarea
                              required
                              onChange={(e) => {
                                setPersonalinfo({
                                  ...Personalinfo,
                                  hobbies: e.target.value,
                                });
                              }}
                            ></textarea>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                  <div class="">
                    <div class="text-center mb-3">
                      <button
                        type="submit"
                        class="btn btn-success"
                        onClick={psinfo}
                      >
                        Update Personal Info
                      </button>
                      <ToastContainer />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </>
        );
      }
    };

    // button for back, teacher form, student form
    return (
      <>
        <div className="container mt-5">
          <div className="row">
            <div className="col-12">
            <div className="text-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setpageData(3);
                }}
              style={{float:"left"}}
              >
                Back to list
              </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    setshow(2);
                  }}
                >
                  Personal Info
                </button>
                <button
                  type="button"
                  className="btn btn-primary ml-2"
                  onClick={() => {
                    setshow(1);
                  }}
                >
                  Academic Info
                </button>
              </div>
            </div>
          </div>
          {data(show)}
        </div>
      </>
    );
  };

  const [Id, setId] = useState();
  const [pageData, setpageData] = useState(0);
  //cards
  const Card = (props) => {
    return (
      <>
        <div className="col-sm-1 col-xl-4 col-l-3 col-md-4 mt-4 ">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Student Name : {props.studentname}</h5>
              <p className="card-text">
                <p>Admisson id: {props.admissionid}</p>
                <p>Date of birth: {props.dob}</p>
              </p>
              <div className="text-center">
                <button
                  className="btn btn-btn btn-success"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  onClick={() => {
                    setId(props.admissionid);
                    setpageData(1);
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
  //useeffect ajax call for all un upadted student details
  useEffect(() => {
    const id = localStorage.getItem("teacid");
    console.log(id);
    axios.get(`${baseUrl}/details/${id}`).then(
      (response) => {
        console.log(response);
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
  }

  if (pageData === 1) {
    return (
      <>
        <NewModal value={Id} />
      </>
    );
  }
  //cards
  else {
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
        <div className="container">
          <div className="text-center">
            <h1>Student List</h1>
          </div>
          <div className="row">{info.data.map(studentcard)}</div>
        </div>
      </>
    );
  }
};

export default ProfileTeacher;
