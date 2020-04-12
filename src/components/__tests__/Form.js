import React from "react";
import {render, fireEvent, cleanup} from "@testing-library/react";
import "jest-styled-components";

import Form from "../Form";
import renderWithContext from "../../tests/test-utils";

afterEach(cleanup);

describe("<Form/>", () => {
  const handleSubmit = jest.fn();
  const {getByLabelText, getByText} = renderWithContext(<Form onSubmit={handleSubmit} />);
  const submit = getByLabelText("submit");

  fireEvent.click(getByLabelText("submit"));

  test("Calling api", () => {
    expect(handleSubmit).toHaveBeenCalledTimes(0);
  });
});
