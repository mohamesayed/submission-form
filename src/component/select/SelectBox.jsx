import React from "react";
import { ReactComponent as Location } from "../../assets/location.svg";

function SelectBox({ className, label, value, type, children, ...options }) {
  return (
    <>
      <div className="location">
        <div className="container">
          <select
            class="form-select"
            aria-label="Default select example"
            as={"div"}
          >
            <option selected>Governate </option>
            <option value="1"> One </option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>
    </>
  );
}

export default SelectBox;
