import { USER_SIGN_UP_START, USER_SIGN_IN_START } from "./action";
import { signUpFailure, signInFailure } from "./action";

import { takeLatest, all, call, put } from "@redux-saga/core/effects";

function* userSignInStart() {
  try {
    const response = yield fetch();
    const dataInJson = yield response.kson();
    if (response.status === 200) {
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
    yield console.log(JSON.stringify(data));
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
  yield all([call(userSignUp)]);
}
