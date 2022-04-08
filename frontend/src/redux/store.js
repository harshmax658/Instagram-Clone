import createSagaMiddleware from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";

import rootReducer from "./rootReducers";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(logger, sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
