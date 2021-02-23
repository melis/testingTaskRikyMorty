import { takeEvery, call, put } from "redux-saga/effects";
import blogApi from "../../api/api";

function* workerLoadPerson(a) {
  try {
    const data = yield blogApi.getPerson(a.id);
    yield put({ type: "SET_PERSON", person: data });
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.info });
  }
}
export function* watchLoadPerson() {
  yield takeEvery("LOAD_PERSON", workerLoadPerson);
}

function* workerLoadPersons(a) {
  try {
    const data = yield blogApi.getPersons(a.next);

    yield put({
      type: "SET_PERSONS",
      persons: data.results,
      error: null,
      next: data.info.next,
      prev: data.info.prev,
    });
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.info });
  }
}
export function* watchLoadPersons() {
  yield takeEvery("LOAD_PERSONS", workerLoadPersons);
}
