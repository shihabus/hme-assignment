import {useReducer} from "react";

const reducer = (prevState = {}, updatedState = {}) => ({
  ...prevState,
  ...updatedState,
});

const useState = (initialState = {}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setState = (updatedState) => dispatch(updatedState);

  return [state, setState];
};

export default useState;
