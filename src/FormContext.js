import React, {useReducer, createContext} from "react";

export const FormContext = createContext();

const FIELD_CHANGED = "FIELD_CHANGED";
const RESET_FORM = "RESET_FORM";

const initialState = {
  email: "",
  emailIsValid: false,
  emailErrorMessage: "",
  password: "",
  passwordIsValid: false,
  passwordErrorMessage: "",
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
    resetForm,
    isFormValid: state.emailIsValid && state.passwordIsValid,
  };

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};
