import { useState } from "react";

const useLoginSignup = (value) => {
  const [formData, setFormData] = useState(value);

  const formDataHandler = (e) => {
    console.log(e.target.name);
    console.log(e.target.value);
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return [formData, formDataHandler];
};

export default useLoginSignup;
// harsh
