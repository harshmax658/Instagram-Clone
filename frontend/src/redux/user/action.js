export const USER_SIGN_UP_START = "USER_SIGN_UP_START";
// export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const USER_SIGN_UP_FAILURE = "USER_SIGN_UPFAILURE";

export const USER_SIGN_IN_START = "USER_SIGN_IN_START";
// export const USER_SIGN_IN_SUCCESS = "USER_SIGN_IN_SUCCESS";
export const USER_SIGN_IN_FAILURE = "USER_SIGN_IN_FAILURE";

export const signInStart = (data) => {
  return {
    type: USER_SIGN_UP_START,
    data,
  };
};
// export const signInSuccess = (data) => {
//   return {
//     type: USER_SIGN_IN_SUCCESS,
//     data,
//   };
// };
export const signInFailure = (data) => {
  return {
    type: USER_SIGN_IN_FAILURE,
    data,
  };
};
export const signUpStart = (data) => {
  return {
    type: USER_SIGN_UP_START,
    data,
  };
};

export const signUpFailure = (data) => {
  return {
    type: USER_SIGN_UP_FAILURE,
    data,
  };
};
