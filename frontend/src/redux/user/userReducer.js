import {
  USER_SIGN_UP_START,
  USER_SIGN_IN_FAILURE,
  // USER_SIGN_UP_SUCCESS,
  USER_SIGN_UP_FAILURE,
} from "./action";
const initialUserState = {
  user: null,
  error: null,
};

const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case USER_SIGN_UP_START: {
      return { ...state };
    }

    // case USER_SIGN_UP_SUCCESS: {
    //   return { ...state };
    // }

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
