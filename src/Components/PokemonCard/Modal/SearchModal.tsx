import React from "react";
import { BsSearch } from "react-icons/bs";
const SearchModal = () => {
  return (
    <>
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <div className="input-group">
                <div className="modal-form">
                  <input
                    type="search"
                    id="form1"
                    placeholder="search pokemon"
                    className="form-control"
                  />
                  <label className="form-label" htmlFor="form1">
                    <button type="button" className="btn btn-primary">
                      {" "}
                      <BsSearch />
                    </button>
                  </label>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
