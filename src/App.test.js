import React from "react";
import {render} from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const {getByText} = render(<App />);
  const counter = getByText("Root");
  console.log(counter);
  expect(1).toBe(1);
});
