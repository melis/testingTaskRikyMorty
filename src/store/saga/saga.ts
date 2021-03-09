import { takeEvery, call, put } from "redux-saga/effects";
import blogApi from "../../api/api";
import { personType } from "../person/person";
import { loadPersonType } from "../person/personActions";
import { loadPersonsType } from "../persons/personsActions";

type dataPersonsType = {
  info: {
    count: number;
    next: string | null;
    prev: string | null;
    pages: number;
  };
  results: Array<personType>;
};
type ErrorType = {
  error?: string;
};

function* workerLoadPerson(a: loadPersonType) {
  try {
    yield put({ type: "SET_LOADING", loading: true });
    const data: personType & ErrorType = yield blogApi.getPerson(a.id);
    console.log(data);
    if (data.error) {
      throw new Error(data.error);
    }
    yield put({ type: "SET_PERSON", person: data });
  } catch (e) {
    yield put({ type: "SET_ERROR", error: e.message });
  }
}
export function* watchLoadPerson() {
  yield takeEvery("LOAD_PERSON", workerLoadPerson);
}

function* workerLoadPersons(a: loadPersonsType) {
  try {
    const data: dataPersonsType = yield blogApi.getPersons(a.next);

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
