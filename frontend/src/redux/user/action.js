export const USER_SIGN_UP_START = "USER_SIGN_UP_START";
export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const USER_SIGN_UP_FAILURE = "USER_SIGN_UPFAILURE";

export const signUpStart = (data) => {
  console.log("first");
  return {
    type: USER_SIGN_UP_START,
    data,
  };
};
export const signUpSuccess = (data) => {
  return {
    type: USER_SIGN_UP_START,
    data,
  };
};
export const signUpFailure = (data) => {
  return {
    type: USER_SIGN_UP_START,
    data,
  };
};
