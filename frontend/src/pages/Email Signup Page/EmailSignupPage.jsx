import React, { useState } from "react";
import { Center, Top35 } from "./EmailSignup_style";

import SignUpComponent from "../../components/signup component/SignUpComponent";
import LoginComponent from "../../components/login component/LoginComponent";
const EmailSignupPage = () => {
  const [login, setLogin] = useState(false);
  return (
    <Center>
      <Top35>
        {login ? (
          <LoginComponent login={setLogin} />
        ) : (
          <SignUpComponent login={setLogin} />
        )}
      </Top35>
    </Center>
  );
};

export default EmailSignupPage;
//Harsh
