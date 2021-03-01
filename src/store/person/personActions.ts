// import blogApi from "../../api/api";
export type loadPersonType = {
  type: "LOAD_PERSON";
  id: number;
};
export const loadPerson = (id: number): loadPersonType => {
  return { type: "LOAD_PERSON", id };
};

// export const setPerson = (id) => {
//   return (dispatch) => {
//     // dispatch({ type: 'SET_LOADING', loading: true });
//     blogApi.getPerson(id).then((a) => {
//       if (a.error) {
//         dispatch({ type: "SET_ERROR", error: a.error });
//       } else {
//         dispatch({
//           type: "SET_PERSON",
//           person: a,
//         });
//       }
//       // dispatch({ type: 'SET_LOADING', loading: false });
//     });
//   };
// };
