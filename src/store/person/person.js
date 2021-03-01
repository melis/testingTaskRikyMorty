const initialState = {
  person: null,
  loading: true,
  error: null,
};

const person = (state = initialState, action) => {
  switch (action.type) {
    case "SET_PERSON":
      return {
        ...state,
        person: action.person,
        loading: false,
        error: null,
      };
    case "SET_LOADING":
      return { ...state, loading: action.loading };
    case "SET_ERROR":
      return { ...state, error: action.error, loading: false };

    default:
      return state;
  }
};

export default person;
