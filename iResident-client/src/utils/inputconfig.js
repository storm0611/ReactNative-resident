import string, { String } from "./string";

const InputConfig = {
  SignUpInput: [
    {
      PlaceHolder: string.name,
      KeyboardType: "default",
      ReturnKeyType: "next",
      AutoCapitalize: "words",
    },
    {
      PlaceHolder: string.first_name,
      KeyboardType: "default",
      ReturnKeyType: "next",
      AutoCapitalize: "words",
    },
    {
      PlaceHolder: string.last_name,
      KeyboardType: "default",
      ReturnKeyType: "next",
      AutoCapitalize: "words",
    },
    {
      PlaceHolder: string.email,
      KeyboardType: "email-address",
      ReturnKeyType: "next",
      AutoCapitalize: "none", //words
    },
    {
      PlaceHolder: string.password,
      SecureTextEntry: true,
      KeyboardType: "default",
      ReturnKeyType: "next",
      AutoCapitalize: "none",
      Length: 20,
    },
    {
      PlaceHolder: string.repeat_password,
      SecureTextEntry: true,
      KeyboardType: "default",
      ReturnKeyType: "done",
      AutoCapitalize: "none",
      Length: 20,
    },
  ],
  SignInInput: [
    {
      PlaceHolder: string.email,
      KeyboardType: "email-address",
      ReturnKeyType: "next",
      AutoCapitalize: "none", //words
    },
    {
      PlaceHolder: string.password,
      SecureTextEntry: true,
      KeyboardType: "default",
      ReturnKeyType: "done",
      AutoCapitalize: "none",
      Length: 20,
    },
  ],
};
export default InputConfig;
