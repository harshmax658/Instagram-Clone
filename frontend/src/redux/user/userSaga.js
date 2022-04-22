import { takeLatest, all, call, put } from "@redux-saga/core/effects";
import {
  USER_SIGN_UP_START,
  USER_SIGN_IN_START,
  CHECK_AUTHORIZATION,
  USER_DATA_FETCH_START,
  USER_DATA_UPDATE_START,
  USER_LOGOUT_START,
} from "./action";
import {
  signUpFailure,
  userDataFetchSuccess,
  userDataFetchFailure,
  signInFailure,
  signInSuccess,
  userDataUpdateSuccess,
  userDataUpdateFailure,
  setUserProfilePicture,
  userLogoutSuccess,
  userLogoutFailure,
} from "./action";

function* userLogoutStart({ data }) {
  try {
    console.log(data);
    const response = yield fetch("/api/user/destroy-session", {
      headers: {
        Authorization: data,
      },
      credentials: "include",
    });
    const dataInJson = yield response.json();
    console.log(dataInJson);
    if (response.status === 200) {
      yield put(userLogoutSuccess(dataInJson));
    }
  } catch (error) {
    console.log(error);
    yield put(userLogoutFailure(error));
  }
}
function* userLogoutt() {
  yield takeLatest(USER_LOGOUT_START, userLogoutStart);
}

function* updateuserDataStart({ data: { formData, token, profilePhotoImg } }) {
  try {
    let response;
    if (profilePhotoImg) {
      response = yield fetch("/api/user/update-user-profile", {
        method: "Post",
        headers: {
          Authorization: token,
        },
        credentials: "include",
        body: profilePhotoImg,
      });
    } else {
      response = yield fetch("/api/user/update-user-profile", {
        method: "Post",
        headers: {
          "Content-type": "application/json",
          Authorization: token,
        },
        credentials: "include",

        body: JSON.stringify(formData),
      });
    }
    //
    const dataJson = yield response.json();

    if (response.status === 200) {
      if (profilePhotoImg) {
        yield put(setUserProfilePicture(dataJson.path));
      } else {
        yield put(userDataUpdateSuccess(dataJson.data.userData));
      }
    } else {
      throw new Error(dataJson.message);
    }
  } catch (error) {
    console.log(error);
    yield put(userDataUpdateFailure(error));
  }
}

function* updateuserData() {
  yield takeLatest(USER_DATA_UPDATE_START, updateuserDataStart);
}

function* fetchUserDataStart({ data }) {
  try {
    const response = yield fetch("/api/user/get-user-data", {
      headers: {
        "Content-type": "application/json",
        Authorization: data,
      },
      credentials: "include",
    });
    const dataInJson = yield response.json();
    if (response.status === 200) {
      yield put(userDataFetchSuccess(dataInJson.data));
    } else {
      console.log(dataInJson);
      throw new Error(dataInJson.message);
    }
  } catch (error) {
    console.log(error);
    yield put(userDataFetchFailure(error));
  }
}
function* fetchUserData() {
  yield takeLatest(USER_DATA_FETCH_START, fetchUserDataStart);
}

function* userAuthorizationProcessStart({ data }) {
  try {
    const response = yield fetch("/api/user/isAuthorized", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (response.status === 200) {
      const dataInJson = yield response.json();

      yield put(signInSuccess(dataInJson.userToken));
    } else {
      // throw new Error(dataInJson.message);
      data("");
    }
  } catch (error) {
    console.log(error);
    yield put(signInFailure(error));
  }
}

function* checkAuthorizationStart() {
  yield takeLatest(CHECK_AUTHORIZATION, userAuthorizationProcessStart);
}

function* userSignInStart({ data }) {
  try {
    const response = yield fetch("/api/user/login", {
      method: "Post",
      credentials: "include",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    });
    const dataInJson = yield response.json();
    if (response.status === 200) {
      yield put(signInSuccess(dataInJson.userToken));
    } else {
      throw new Error(dataInJson.message);
    }
  } catch (error) {
    yield put(signInFailure(error));
  }
}
function* userSignIn() {
  yield takeLatest(USER_SIGN_IN_START, userSignInStart);
}

function* signUpStart({ data: { signUpData, navigate } }) {
  try {
    const response = yield fetch("/api/user/create-new-user", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signUpData),
      credentials: "include",
    });
    const dataInJson = yield response.json();
    if (response.status === 200) {
      navigate("/");
    } else {
      throw new Error(dataInJson.message);
    }
  } catch (error) {
    console.log(error);
    yield put(signUpFailure(error));
  }
}
function* userSignUp() {
  yield takeLatest(USER_SIGN_UP_START, signUpStart);
}

export default function* userSaga() {
  yield all([
    call(userSignUp),
    call(userSignIn),
    call(checkAuthorizationStart),
    call(fetchUserData),
    call(updateuserData),
    call(userLogoutt),
  ]);
}
