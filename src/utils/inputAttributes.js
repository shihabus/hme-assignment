const inputAttributes = (inputType) => {
  let attrs = {};
  let _inputType = String(inputType).trim().toLowerCase();

  if (_inputType === "email") {
    attrs = {
      required: "required",
      placeholder: "Enter your Email",
    };
  }

  if (_inputType === "password") {
    attrs = {
      maxLength: 4,
      required: "required",
      pattern: /[A-Z]{1,2}/g,
      placeholder: "Enter your Password",
    };
  }

  return attrs;
};

export default inputAttributes;
