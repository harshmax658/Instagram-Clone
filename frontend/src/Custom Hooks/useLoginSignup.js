import { useState } from "react";

const useLoginSignup = (value) => {
  const [formData, setFormData] = useState(value);

  const formDataHandler = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  return [formData, formDataHandler];
};

export default useLoginSignup;
// harsh
