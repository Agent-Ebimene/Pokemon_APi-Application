import React from "react";
import { BsSearch } from "react-icons/bs";
import { SearchProps } from "../../Utils/services";
import { Pokemon } from "../../Utils/services";

const SearchModal = ({}: Pokemon) => {
  return (
    <>
      <div
        className="modal fade modal-open"
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
                    type="text"
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
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;
