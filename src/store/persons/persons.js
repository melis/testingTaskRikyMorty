const initialState = {
  persons: [],
  loading: true,
  next: null,
  prev: null,
};

const persons = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PERSONS':
      return {
        ...state,
        persons: [...state.persons, ...action.persons],
        loading: false,
        error: null,
        next: action.next,
        prev: action.prev,
      };
    case 'SET_LOADING':
      return { ...state, loading: action.loading };
    case 'SET_ERROR':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default persons;
