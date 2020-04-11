import React from "react";
import {FormProvider} from "./FormContext";
import Login from "./Login";

function App() {
  return (
    <FormProvider>
      <Login />
    </FormProvider>
  );
}

export default App;
