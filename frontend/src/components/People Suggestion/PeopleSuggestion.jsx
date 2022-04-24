import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const PeopleSuggestion = () => {
  const { token } = useSelector(({ userReducer }) => userReducer);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch("/api/user/users-suggestions", {
        headers: {
          Authorization: token,
        },
        credentials: "include",
      });
      const a = await response.json();
      console.log(a);
    };
    callApi();
    console.log("  callApi()");
  }, []);
  return <div>PeopleSuggestion</div>;
};

export default PeopleSuggestion;
