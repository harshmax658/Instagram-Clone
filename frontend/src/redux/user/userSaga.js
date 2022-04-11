import {
  USER_SIGN_UP_START,
  USER_SIGN_IN_START,
  CHECK_AUTHORIZATION,
  USER_DATA_FETCH_START,
} from "./action";
import {
  signUpFailure,
  userDataFetchSuccess,
  userDataFetchFailure,
  signInFailure,
  signInSuccess,
} from "./action";

import { takeLatest, all, call, put } from "@redux-saga/core/effects";

function* fetchUserDataStart({ data }) {
  try {
    const response = yield fetch("/api/user/get-user-data", {
      headers: {
        "Content-type": "application/json",
        Authorization: data,
      },
    });
    const dataInJson = yield response.json();
    if (response.status == 200) {
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

function* userAuthorizationProcessStart() {
  try {
    const response = yield fetch("/api/user/isAuthorized", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    const dataInJson = yield response.json();
    console.log(dataInJson);
    if (response.status === 200) {
      yield put(signInSuccess(dataInJson.userToken));
    } else {
      throw new Error(dataInJson.message);
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

function* signUpStart({ data }) {
  try {
    const response = yield fetch("/api/user/create-new-user", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const dataInJson = yield response.json();
    if (response.status === 200) {
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
  ]);
}
