import React from "react";
import { ReactComponent as Location } from "../../assets/location.svg";

function Date({ className, label, value, type, children, ...options }) {
  return (
    <>
      <div className="dates">
        <div className="container">
          <div className="date">
            <select
              class="form-select"
              aria-label="Default select example"
              as={"div"}
            >
              <option selected>Date </option>
              <option value="1"> One </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="date">
            <select
              class="form-select"
              aria-label="Default select example"
              as={"div"}
            >
              <option selected>Date </option>
              <option value="1"> One </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>

          <div className="date">
            <select
              class="form-select"
              aria-label="Default select example"
              as={"div"}
            >
              <option selected>Date </option>
              <option value="1"> One </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
}

export default Date;
