import { type } from "os";

// import blogApi from "../../api/api";

export type loadPersonsType = {
  type: "LOAD_PERSONS";
  next: string | null;
};

export const loadPersons = (next: string | null): loadPersonsType => {
  return { type: "LOAD_PERSONS", next: next ? next : "" };
};

// export const setPersons = (next) => {
//   return (dispatch) => {
//     // dispatch({ type: 'SET_LOADING', loading: true });
//     blogApi.getPersons(next).then((a) => {
//       if (a.error) {
//         dispatch({ type: "SET_ERROR", error: a.error });
//       } else {
//         dispatch({
//           type: "SET_PERSONS",
//           persons: a.results,
//           next: a.info.next,
//           prev: a.info.prev,
//         });
//       }
//       // dispatch({ type: 'SET_LOADING', loading: false });
//     });
//   };
// };
