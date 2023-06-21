import React from "react";
import { Form } from "react-bootstrap";

function Input({ className, label, value, type, children, ...options }) {
  return (
    <>
      <Form.Group
        className={className}
        controlId="formGroupPassword"
        as={"div"}
      >
        {label && <Form.Label>{label}</Form.Label>}
        <Form.Control value={value} type={type} {...options}></Form.Control>
        {children}
      </Form.Group>
    </>
  );
}

export default Input;
