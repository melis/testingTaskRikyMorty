export type personType = {
  gender: string;
  created: string;
  episode: string[];
  id: number;
  image: string;
  location: {
    name: string;
    url: string;
  };
  name: string;
  origin: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url: string;
};

export type PersonStateType = {
  person: personType | null;
  loading: boolean | null;
  error: string | null;
};

let initialState = {
  person: null,
  loading: null,
  error: null,
};

type setPersonType = {
  type: "SET_PERSON";
  person: personType;
};
type setLoadingType = {
  type: "SET_LOADING";
};
type setErrorType = {
  type: "SET_ERROR";
  error: string;
};
type actionsType = setPersonType | setLoadingType | setErrorType;

const person = (
  state: PersonStateType = initialState,
  action: actionsType
): PersonStateType => {
  switch (action.type) {
    case "SET_PERSON":
      return {
        ...state,
        person: action.person,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, loading: true };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default person;
