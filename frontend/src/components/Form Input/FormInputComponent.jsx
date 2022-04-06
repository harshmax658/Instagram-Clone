import React from "react";
import { FormInputGroup, FormInput, FormLabel } from "./FormInputStyle";

const FormInputComponent = ({ onchange, labelFor, label, ...otherprops }) => {
  return (
    <FormInputGroup>
      <FormInput onchange={onchange} {...otherprops} />
      {label ? (
        <FormLabel htmlFor={labelFor} shrink={otherprops.value ? true : false}>
          {label}
        </FormLabel>
      ) : null}
    </FormInputGroup>
  );
};

export default FormInputComponent;
// Harsh
