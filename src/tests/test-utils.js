import React from "react";
import {FormContext} from "../FormContext";
import {render, cleanup} from "@testing-library/react";

afterEach(cleanup);

const renderWithContext = (ui, value = {}) => {
  return render(<FormContext.Provider value={value}>{ui}</FormContext.Provider>);
};

export default renderWithContext;
