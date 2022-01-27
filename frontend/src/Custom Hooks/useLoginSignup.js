import { useState } from "react";

const useLoginSignup = (value) => {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  const formDataHandler = (e) => {
    if (value === "login") {
      setLoginData((prev) => {
        return { ...prev, [e.target.name]: e.target.value };
      });
    } else {
    }
  };

  if (value === "login") {
    return [loginData, formDataHandler];
  } else {
  }
};

export default useLoginSignup;
// harsh
