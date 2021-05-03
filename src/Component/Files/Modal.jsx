import React, { useContext, useState } from "react";

const Modal = (props) => {
  const [Info, setInfo] = useState({});
  const data =()=>{
    setInfo({...Info,id:props.value});
    setInfo({...Info,id:props.value});
    abc();
  }
  const abc =()=>{
    console.log(Info.id);
    console.log(Info);
  }
  return (
    <> 
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Update Information
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">
            <div class="text-center">
                <h5>Enter Details</h5>
              </div>
              <div>
                <table class="table table-borderless">
                  <thead>
                    <tr>
                      <th scope="col">Subject</th>
                      <th scope="col">Marks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th>Maths</th>
                      <td>
                        <div class="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="enter Marks Here"
                            onChange={(e)=>{setInfo({...Info,Maths:e.target.value})}}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>English</th>
                      <td>
                        <div class="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="enter Marks Here"
                            onChange={(e)=>{setInfo({...Info,English:e.target.value})}}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Computer</th>
                      <td>
                        <div class="input-group input-group-sm mb-3">
                          <input
                            type="text"
                            class="form-control"
                            aria-label="Sizing example input"
                            aria-describedby="inputGroup-sizing-sm"
                            placeholder="enter Marks Here"
                            onChange={(e)=>{setInfo({...Info,Computer:e.target.value})}}
                          />
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Co curricular activities</th>
                      <td>
                        <div class="input-group input-group-sm mb-3">
                          <textarea
                          onChange={(e)=>{setInfo({...Info,extrainfo:e.target.value})}}
                          >
                          </textarea>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <th>Fess</th>
                      <td>
                        <div class="input-group input-group-sm mb-3">
                          <select class="form-control" id="classall"
                          onChange={(e)=>{setInfo({...Info,fees:e.target.value})}}
                          >
                            <option>Paid</option>
                            <option>Unpaid</option>
                          </select>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
               <button type="button" class="btn btn-success" onClick={()=>{setInfo({...Info,id:props.value})
                abc();
              }}>
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
