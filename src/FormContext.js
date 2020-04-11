import React, {useReducer, useState, createContext} from "react";

export const FormContext = createContext();

const FIELD_CHANGED = "FIELD_CHANGED";
const LOGIN_STATUS_CHANGED = "LOGIN_STATUS_CHANGED";

const initialState = {
  email: "",
  password: "",
  isFormValid: false,
  loginStatus: null,
};

const reducer = (state, action) => {
  if (action.type === FIELD_CHANGED) {
    return state;
  }
  if (action.type === LOGIN_STATUS_CHANGED) {
    return state;
  }
  return state;
};

export const FormProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onFieldValueChange = (payload) => {
    dispatch({
      type: FIELD_CHANGED,
      payload,
    });
  };

  const loginStatusChange = ({status}) => {
    dispatch({
      type: LOGIN_STATUS_CHANGED,
      payload: status,
    });
  };

  const value = {
    email: state.email,
    password: state.password,
    onFieldValueChange,
    loginStatusChange,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
