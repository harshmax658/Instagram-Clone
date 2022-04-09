import { USER_SIGN_UP_START } from "./action";

import { takeLatest, all, call } from "@redux-saga/core/effects";

function* signUpStart({ data }) {
  yield console.log(data);
}
function* userSignUp() {
  yield takeLatest(USER_SIGN_UP_START, signUpStart);
}

export default function* userSaga() {
  yield all([call(userSignUp)]);
}
