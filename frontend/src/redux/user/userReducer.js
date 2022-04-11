import {
  USER_SIGN_UP_START,
  USER_SIGN_IN_FAILURE,
  // USER_SIGN_UP_SUCCESS,
  USER_SIGN_IN_SUCCESS,
  USER_SIGN_UP_FAILURE,
  USER_DATA_FETCH_SUCCESS,
} from "./action";
const initialUserState = {
  userData: null,
  userName: null,
  fullName: null,
  avatar: null,
  followers: [],
  following: [],
  token: null,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_SIGN_UP_START: {
      return { ...state };
    }

    case USER_SIGN_IN_SUCCESS: {
      return { ...state, token: action.data };
    }
    case USER_DATA_FETCH_SUCCESS: {
      return {
        ...state,
        error: null,
        userData: action.data.data,
        userName: action.data.data.userName,
        fullName: action.data.data.fullName,
        avatar: action.data.data.avatar,
        followers: [],
        following: [],
      };
    }

    case USER_SIGN_IN_FAILURE:
    case USER_SIGN_UP_FAILURE: {
      return { ...state, error: action.data };
    }
    default: {
      return { ...state };
    }
  }
};
export default userReducer;
