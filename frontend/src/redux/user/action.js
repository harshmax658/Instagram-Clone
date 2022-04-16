export const USER_SIGN_UP_START = "USER_SIGN_UP_START";
// export const USER_SIGN_UP_SUCCESS = "USER_SIGN_UP_SUCCESS";
export const USER_SIGN_UP_FAILURE = "USER_SIGN_UPFAILURE";

export const USER_SIGN_IN_START = "USER_SIGN_IN_START";
export const USER_SIGN_IN_SUCCESS = "USER_SIGN_IN_SUCCESS";
export const USER_SIGN_IN_FAILURE = "USER_SIGN_IN_FAILURE";

export const USER_DATA_FETCH_START = "USER_DATA_FETCH_START";
export const USER_DATA_FETCH_SUCCESS = "USER_DATA_FETCH_SUCCESS";
export const USER_DATA_FETCH_FAILURE = "USER_DATA_FETCH_FAILURE";

export const USER_DATA_UPDATE_START = "USER_DATA_UPDATE_START";
export const USER_DATA_UPDATE_SUCCESS = "USER_DATA_UPDATE_SUCCESS";
export const USER_DATA_UPDATE_FAILURE = "USER_DATA_UPDATE_FAILURE";

export const CHECK_AUTHORIZATION = "CHECK_AUTHORIZATION";

export const SET_USER_PROFILE_PICTURE = "SET_USER_PROFILE_PICTURE";

export const setUserProfilePicture = (data) => {
  return {
    type: SET_USER_PROFILE_PICTURE,
    data,
  };
};

export const userDataUpdateStart = (data) => {
  return {
    type: USER_DATA_UPDATE_START,
    data,
  };
};
export const userDataUpdateSuccess = (data) => {
  return {
    type: USER_DATA_UPDATE_SUCCESS,
    data,
  };
};
export const userDataUpdateFailure = (data) => {
  return {
    type: USER_DATA_UPDATE_FAILURE,
    data,
  };
};

export const userDataFetchStart = (data) => {
  return {
    type: USER_DATA_FETCH_START,
    data,
  };
};
export const userDataFetchSuccess = (data) => {
  return {
    type: USER_DATA_FETCH_SUCCESS,
    data,
  };
};
export const userDataFetchFailure = (data) => {
  return {
    type: USER_DATA_FETCH_FAILURE,
    data,
  };
};

export const checkAuthorization = (data) => {
  return {
    type: CHECK_AUTHORIZATION,
    data,
  };
};
export const signInStart = (data) => {
  return {
    type: USER_SIGN_IN_START,
    data,
  };
};
export const signInSuccess = (data) => {
  return {
    type: USER_SIGN_IN_SUCCESS,
    data,
  };
};
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
