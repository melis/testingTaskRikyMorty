import { takeEvery, call, put } from "redux-saga/effects";
import blogApi from "../../api/api";
import { loadPersonType } from "../person/personActions";

function* workerLoadPerson(a: loadPersonType) {
  try {
    yield put({ type: "SET_LOADING", loading: true });
    const data = yield blogApi.getPerson(a.id);
    if (data.error) throw new Error(data.error);
    yield put({ type: "SET_PERSON", person: data });
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.message });
  }
}
export function* watchLoadPerson() {
  yield takeEvery("LOAD_PERSON", workerLoadPerson);
}

function* workerLoadPersons(a: any) {
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
