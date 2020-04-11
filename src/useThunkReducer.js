import {useReducer} from "react";
import isFunction from "./utils/isFunction";

const useThunkReducer = (reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const enhancedDispatch = (action) => {
    if (isFunction(action)) {
      action(dispatch);
    } else {
      dispatch(action);
    }
  };

  return [state, enhancedDispatch];
};

export default useThunkReducer;
