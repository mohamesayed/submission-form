import React from "react";
import { ReactComponent as Info } from "../assets/document.svg";
import { ReactComponent as Person } from "../assets/person.svg";
import { ReactComponent as Location } from "../assets/location.svg";
import { ReactComponent as Phone } from "../assets/20.svg";
import { ReactComponent as Mail } from "../assets/Mail.svg";

import Input from "./Input/Input";
import CountryGovernate from "./select/CountryGovernate";
import Checkbox from "./check/Checkbox";

function PersonalInfo({ className }) {
  return (
    <>
      <div className="info">
        <div className="container">
          <div className="name">
            <div className="first">
              <Input
                className={"personal-info"}
                label={"First Nme"}
                placeholder={"Type here"}
                onChange={(event) => {
                  console.log("a");
                }}
              >
                <Info className="user" />
              </Input>
            </div>

            <div className="second">
              <Input
                className={"personal-info"}
                label={"Last Nme"}
                placeholder={"Type here"}
                onChange={(event) => {
                  console.log("a");
                }}
              >
                <Info className="user" />
              </Input>
            </div>
          </div>

          <div className="name">
            <div className="first">
              <Input
                className={"personal-info"}
                label={"National ID "}
                placeholder={"Type here"}
                onChange={(event) => {
                  console.log("a");
                }}
              >
                <Person className="user" />
              </Input>
            </div>

            <div className="second">
              <Checkbox />
            </div>
          </div>

          <CountryGovernate />

          {/* <Input
            className={"personal-info"}
            label={"Country "}
            placeholder={"Type here"}
            onChange={(event) => {
              console.log("a");
            }}
          >
            <Location className="user" />
          </Input>

          <Input
            className={"personal-info"}
            label={"Governate "}
            placeholder={"Type here"}
            onChange={(event) => {
              console.log("a");
            }}
          >
            <Location className="user" />
          </Input> */}

          <div className="name">
            <div className="first">
              <Input
                className={"personal-info"}
                label={"Phone "}
                placeholder={"Type here"}
                onChange={(event) => {
                  console.log("a");
                }}
              >
                <Phone className="user" />
              </Input>
            </div>

            <div className="second">
              <Input
                className={"personal-info"}
                label={"Email "}
                placeholder={"Type here"}
                onChange={(event) => {
                  console.log("a");
                }}
              >
                <Mail className="user" />
              </Input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PersonalInfo;
