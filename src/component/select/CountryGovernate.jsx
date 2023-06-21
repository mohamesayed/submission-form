import React from "react";
import { ReactComponent as Location } from "../../assets/location.svg";

function CountryGovernate({
  className,
  label,
  value,
  type,
  children,
  ...options
}) {
  return (
    <>
      <div className="country-governate">
        <div className="container">
          <div className="country">
            <select
              class="form-select"
              aria-label="Default select example"
              as={"div"}
            >
              <option selected>Type here </option>
              <option value="1"> One </option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div className="governate">
            <select
              class="form-select"
              aria-label="Default select example"
              as={"div"}
            >
              <option selected>Type here </option>
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

export default CountryGovernate;
