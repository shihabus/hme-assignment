import React, {useReducer, createContext} from "react";

export const FormContext = createContext();

const FIELD_CHANGED = "FIELD_CHANGED";
const LOGIN_STATUS_CHANGED = "LOGIN_STATUS_CHANGED";
const RESET_FORM = "RESET_FORM";

const initialState = {
  email: "",
  emailIsValid: false,
  emailErrorMessage: "",
  password: "",
  passwordIsValid: false,
  passwordErrorMessage: "",
  loginStatus: null,
};

const reducer = (state, action) => {
  if (action.type === FIELD_CHANGED) {
    const {
      payload: {key, value, isValid, errorMessage},
    } = action;
    return {
      ...state,
      [key]: value,
      [`${key}IsValid`]: isValid,
      [`${key}ErrorMessage`]: errorMessage,
    };
  }
  if (action.type === RESET_FORM) {
    return initialState;
  }
  if (action.type === LOGIN_STATUS_CHANGED) {
    return {...state, loginStatus: action.payload};
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

  const loginStatusChange = (payload) => {
    dispatch({
      type: LOGIN_STATUS_CHANGED,
      payload,
    });
  };

  const resetForm = () => {
    dispatch({
      type: RESET_FORM,
    });
  };

  const value = {
    email: {
      value: state.email,
      isValid: state.emailIsValid,
      errorMessage: state.emailErrorMessage,
    },
    password: {
      value: state.password,
      isValid: state.passwordIsValid,
      errorMessage: state.passwordErrorMessage,
    },
    onFieldValueChange,
    loginStatusChange,
    resetForm,
    isFormValid: state.emailIsValid && state.passwordIsValid,
    loginState: state.loginStatus,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
