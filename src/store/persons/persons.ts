import { personType } from "../person/person";
type setPersonsType = {
  type: "SET_PERSONS";
  persons: Array<personType> | [];
  next: string | null;
  prev: string | null;
};
type setLoadingType = {
  type: "SET_LOADING";
};
type setErrorType = {
  type: "SET_ERROR";
  error: string;
};
type actionsType = setPersonsType | setErrorType | setLoadingType;

export type PersonsStateType = {
  persons: Array<personType> | [];
  loading: boolean | null;
  next: string | null;
  prev: string | null;
  error: string | null;
};
const initialState = {
  persons: [],
  loading: null,
  next: null,
  prev: null,
  error: null,
};

const persons = (
  state: PersonsStateType = initialState,
  action: actionsType
): PersonsStateType => {
  switch (action.type) {
    case "SET_PERSONS":
      return {
        ...state,
        persons: [...state.persons, ...action.persons],
        loading: false,
        error: null,
        next: action.next,
        prev: action.prev,
      };

    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default persons;
