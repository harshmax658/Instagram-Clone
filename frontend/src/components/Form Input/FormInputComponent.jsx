import React from "react";
import { FormInputGroup, FormInput, FormLabel } from "./FormInputStyle";

const FormInputComponent = ({ onchange, label, ...otherprops }) => {
  return (
    <FormInputGroup>
      <FormInput onchange={onchange} {...otherprops} />
      {label ? <FormLabel></FormLabel> : null}
    </FormInputGroup>
  );
};

export default FormInputComponent;
// Harsh
