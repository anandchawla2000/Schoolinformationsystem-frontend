import React, { useContext, useState } from "react";

const Modal = (props) => {
  const [Info, setInfo] = useState({});
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
            <form class="form-inline mt-2">
              <label class="md-only" for="inlineFormInputName2">
                Name
              </label>
              <input
                height="65%"
                type="text"
                class="form-control mb-2 mr-sm-2"
                id="inlineFormInputName2"
                placeholder="Jane Doe"
              ></input>
            </form>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-success">
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
