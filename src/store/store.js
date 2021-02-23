import { createStore, applyMiddleware } from "redux";
import { watchLoadPerson, watchLoadPersons } from "./saga/saga";

import reduxThunk from "redux-thunk";
import rootReduser from "./rootReduser";
import createSaga from "redux-saga";

const saga = createSaga();

const store = createStore(rootReduser, applyMiddleware(reduxThunk, saga));
saga.run(watchLoadPerson);
saga.run(watchLoadPersons);

export default store;
