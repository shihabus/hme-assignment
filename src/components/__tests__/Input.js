import React from "react";
import {render, fireEvent, cleanup} from "@testing-library/react";

import Input from "../Input";

afterEach(cleanup);

describe("<Input type='email' />", () => {
  const mockCallBack = jest.fn();
  const type = "email";
  const mockParams = {
    value: "shihab",
    isValid: false,
    errorMessage: "Please enter a valid email id",
  };
  const {getByLabelText} = render(
    <Input onChangeCallBack={mockCallBack} valueParam={mockParams} type={type} />
  );
  const input = getByLabelText("input");
  const errorFieldNode = getByLabelText("error-message");

  fireEvent.change(input, {target: {value: "Rafael"}});

  test("Field value updates and type is set", () => {
    expect(input.value).toMatch(mockParams.value);
    expect(input.type).toBe(type);
  });
  test("Error Message displayed", () => {
    expect(errorFieldNode).toBeTruthy();
    expect(errorFieldNode.textContent).toMatch(mockParams.errorMessage);
  });
});
