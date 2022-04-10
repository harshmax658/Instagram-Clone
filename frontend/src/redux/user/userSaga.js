import { USER_SIGN_UP_START } from "./action";

import { takeLatest, all, call } from "@redux-saga/core/effects";

function* signUpStart({ data }) {
  try {
    yield console.log(JSON.stringify(data));
    const response = yield fetch("/api/v1/user/login", {
      method: "Post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    console.log(yield response.json());
    // if (response.status === 200) {
    //   yield console.log(yield response.json());
    // } else {
    //   yield console.log(yield response.json());
    // }
  } catch (error) {
    console.log(error);
  }
}
function* userSignUp() {
  yield takeLatest(USER_SIGN_UP_START, signUpStart);
}

export default function* userSaga() {
  yield all([call(userSignUp)]);
}
